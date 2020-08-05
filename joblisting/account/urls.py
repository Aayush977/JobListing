from django.urls import path
from . import views
from django.conf import settings
app_name = 'account'
urlpatterns = [
    path('', views.index, name='index'),
    path('signup/', views.SignUp.as_view(), name='signup'),

]
