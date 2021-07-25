from django.urls import path
from . import views
from django.conf import settings

app_name = 'account'
urlpatterns = [
    
    path('homepage/', views.index, name='index'),
    path('about/', views.about, name='aboutUs'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('job-single/<int:pk>', views.jobsingle, name='jobSingle'),
    

    

]
