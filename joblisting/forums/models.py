from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
#Forum Model
class Forum(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null= True)
    title_ad = models.CharField (max_length=100, null= True)
    location = models.CharField(max_length=100, null = True)
    job_region = models.CharField(max_length =100, null=True)
    job_type = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length = 200, blank = True, null = True)
    created_at = models.DateTimeField(auto_now_add= True)

#Comment model
class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE)
    forum = models.ForeignKey(Forum, on_delete = models.CASCADE)
    desc = models.CharField(max_length= 200, blank = True, null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    