from django.urls import path, include
from django.conf import settings
from forums import views
from .views import postListView, ForumViewSet
from rest_framework.routers import DefaultRouter
app_name = 'forums'

urlpatterns = [
    
    path('', views.forums),
    path('api/', views.ForumViewSet.as_view),
    path('post_job/', views.post_job, name='postJob'),
    path('page/', postListView.as_view()),
    
    
    
]
