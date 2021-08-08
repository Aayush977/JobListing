from django.shortcuts import render, redirect

# Create your views here.

from forums.models import Forum


def index(request):
    forums = Forum.objects.all()
    return render(request, 'jobboard/index.html')


def comment(request):
    return render(request, 'jobboard/post-job.html')


def jobSingle(request):
    return render(request, 'jobboard/services.html')
