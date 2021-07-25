from rest_framework import serializers
from forums.models import Forum, Comment

class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forum
        fields = ['user','title_ad', 'location', 'job_type', 'job_region', 'description', 'created_at']


class CreateForumSerializer(serializers.ModelSerializer):
    class Meta:
        model=  Forum
        fields = ['user', 'title_ad', 'location', 'job_type', 'job_region', 'description']

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment 
        fields = "__all__"
