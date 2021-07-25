from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth import logout, authenticate, login as account_login
# Create your views here.
#from account.forms import RegisterForm
from forums.models import Forum
from django.views.generic.list import ListView



def index(request):
    forums = Forum.objects.all()
    return render(request, 'jobboard/index.html', {'forums': forums})


def login(request):
    if request.method == 'POST':
        username = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            account_login(request, user)

            return redirect('account:index')
        else:
            error_message = messages.warning(
                request, "Email or Password didn't match")
            return render(request, 'account/login.html', {'error_message': error_message})

    else:
        return render(request, 'account/login.html', {})


def signup(request):
    if request.method == 'POST':
        username = request.POST['email']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        if (password1 == password2):
            if User.objects.filter(email=email).exists():
                messages.warning(
                    request, 'Email already in use, please login with your email address')
            else:
                user = User.objects.create_user(
                    username=username, password=password1, email=email)
                user.save()
                user.is_active = False
                messages.success(request, 'Account created successfully')
                registered = True

        else:
            messages.warning(request, 'Please retype your password')
        return render(request, 'account/login.html')
    else:

        return render(request, 'index.html')


def logout_view(request):
    auth.logout(request)
    return render(request, 'account/login.html')


def jobsingle(request, pk):
    if request.method == 'GET':
        forum = Forum.objects.get(pk=pk)
        return render(request, 'jobboard/job-single.html', {'forums': forum})


def about(request):
    return render(request, 'jobboard/about.html')
