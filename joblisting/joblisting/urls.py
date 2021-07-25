"""joblisting URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings
from forums.views import ForumViewSet, CreateForumSet
from forums.models import Forum, Comment
from rest_framework import routers, serializers, viewsets
from rest_framework.routers import DefaultRouter

from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
router = DefaultRouter()
router.register(r'forums', ForumViewSet)
router.register(r'createForums', CreateForumSet, basename='createForm')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('account/', include('account.urls', namespace='account')),
    path('forum/', include('forums.urls', namespace='forums')),
    path('apiAuth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^(?:.*)/?', include('frontend.urls'))

    
] + static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)


    

