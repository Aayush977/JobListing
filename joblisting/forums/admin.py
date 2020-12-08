from django.contrib import admin
from .models import Forum, Comment
# Register your models here.
#admin.site.register(Forum)


class ForumAdmin(admin.ModelAdmin):

    list_display = ('title_ad', 'user')
    list_filter = ('title_ad', 'job_region', 'created_at')   
    search_fields = ('job_region', 'created_at')
    ordering = ('job_region', 'created_at') 
admin.site.register(Forum, ForumAdmin)
admin.site.register(Comment)