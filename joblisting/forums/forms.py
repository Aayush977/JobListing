from django.forms import ModelForm
from .models import *
class createForum(ModelForm):
    class Meta:
        model = Forum
        fields = "__all__"