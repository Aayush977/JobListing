from django.shortcuts import render, redirect, get_object_or_404
from .models import Forum, Comment
from django.shortcuts import get_list_or_404
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseRedirect
from django.core.exceptions import ObjectDoesNotExist
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
import json

from django.views.generic.list import ListView
from rest_framework.views import APIView

from rest_framework.response import Response
from forums.serializer import ForumSerializer, CreateForumSerializer, CommentSerializer
from rest_framework import status, viewsets, mixins
from rest_framework.generics import GenericAPIView
from forums.models import User
from django.http import Http404
from django.views.generic.detail import DetailView
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer


class ForumViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):

    queryset = Forum.objects.all()
    serializer_class = ForumSerializer

    def post(self, request, format=None):
        serializer = ForumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT"])
def ForumDetailSet(request, pk):

    try:
        job_lists = Forum.objects.filter(pk=pk)
    except Forum.DoesNotExist:
        return Http404

    if request.method == "GET":
        serializer = ForumSerializer(job_lists, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == "PUT":
        serializer = ForumSerializer(job_lists, data=request.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


def post_job(request):
    return render(request, "jobboard/post-job.html")


class postListView(ListView):

    model = Forum
    context_object_name = "forums"
    template_name = "jobboard/index.html"
    paginate_by = 2


# class CreateForumSet(viewsets.ModelViewSet):

#   serializer_class = CreateForumSerializer

#  def post(self, request, format=None):

#     if not self.request.session.exists(self.request.session.session_key):
#       self.request.session.create()
#    serializer = self.serializer_class(data=request.data)
#  if serializer.is_valid():

#    user = serializer.data.get.user
#     title_ad = serializer.data.get.title_ad
#   location = serializer.data.get.location
#  job_type = serializer.data.get.job_type
# job_region = serializer.data.get.job_region
# description = serializer.data.get.description
# print(user, title_ad, location, job_type, job_region)
##   user, title_ad, location, job_type, job_region, description
# )

# queryset.save()

# def get_queryset(self):

#    return Forum.objects.all()

# class CommentViewSet(viewsets.ModelViewSet):
#   queryset = Comment.objects.all()
#  serializer_class = CommentSerializer


#


def forums(request):
    return render(request, "jobboard/portfolio.html")
