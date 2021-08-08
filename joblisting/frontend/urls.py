from django.urls import path
from . import views

app_name = 'frontend'
urlpatterns = [
    path('', views.index),

    path('postJob/', views.comment, name="comment"),
    path('jobSingle/<int:pk>', views.jobSingle, name='jobSingle')

]
