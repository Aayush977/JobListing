# Generated by Django 3.1 on 2020-11-01 08:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forums', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='forum',
            name='job_type',
        ),
    ]
