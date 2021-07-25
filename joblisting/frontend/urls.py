from django.urls import path
from . import views
app_name = 'frontend'
urlpatterns = [
    path('', views.index),
    path('job',views.jobDetail),
    path('postJob',views.comment)
    
]