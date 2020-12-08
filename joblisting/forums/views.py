from django.shortcuts import render, redirect, get_object_or_404
from .models import Forum, Comment
from .forms import createForum
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

from rest_framework import viewsets
from rest_framework.response import Response
from  forums.serializer import ForumSerializer


class ForumViewSet(viewsets.ModelViewSet):
   
    queryset = Forum.objects.all()
    serializer_class = ForumSerializer
    serialized = ForumSerializer(queryset)
    
    
    


def forums(request):
    return render(request, 'portfolio.html')

@csrf_protect
def post_job(request):
    
    if request.method == "POST" and request.is_ajax():
        email = request.POST.get('email')
        job_title = request.POST.get('job-title')
        location = request.POST.get('location')
        job_region = request.POST.get('job_region')
        job_type = request.POST.get('job_type')
        description = request.POST.get('job-description')  
        content = {'email':email,'job_title':job_title,'location':location, 'job_region': job_region,'job_type':job_type,'description':description}
        print(content)
        try:    
            user_id = User.objects.get(username = request.user.username)
            forum = Forum(user=user_id, title_ad=job_title, location=location, job_region=job_region,job_type = job_type, description=description)
            forum.save()
            content = json.dumps(content)
            return HttpResponse(content, content_type= "application/json" )          
        except User.DoesNotExist:
            user_id =  User.objects.create(username= email)
            user_id.save()
            return render(request,'jobboard/post-job.html',{}) 
    else:    
        return render(request,'jobboard/post-job.html', {})

""" def paginator_list(request):

    object_list = Forum.objects.all()
    paginator = Paginator(object_list, 2)
    page = request.Get.get('page',2)
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        #if page is not an integer deliver the first page
        posts = paginator.page(1)
    except EmptyPage:
        #IF page is out of range deliver last page of results
        posts = paginator.page(paginator.num_pages)
    return render(request, 'account:index', {'page':page, 'posts':posts}) """


class postListView(ListView):
    
    model = Forum
    context_object_name = "forums"
    template_name = "jobboard/index.html"
    paginate_by = 2
