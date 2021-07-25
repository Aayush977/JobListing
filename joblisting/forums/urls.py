from django.urls import path, include
from django.conf import settings
from forums import views
from .views import ForumViewSet, CommentViewSet
from rest_framework.routers import DefaultRouter
app_name = 'forums'





urlpatterns = [
    path('', views.forums),
    path('post_job/', views.post_job, name='postJob')
  
  
]
