from django.urls import path
from . import views
app_name = 'frontend'
urlpatterns = [
    path('', views.index),
    path('comment', views.comment),
    path('postJob',views.comment)
]