from django.db import models
from django.conf import settings

#Forum Model
class Forum(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title_ad = models.CharField (max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add= True)

#Comment model
class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE)
    forum = models.ForeignKey(Forum, on_delete = models.CASCADE)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)