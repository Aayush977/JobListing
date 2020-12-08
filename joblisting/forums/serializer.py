from rest_framework import serializers
from forums.models import Forum
class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forum
        fields = ['user','title_ad', 'location', 'job_type', 'job_region', 'description', 'created_at']