# Generated by Django 3.1 on 2020-11-04 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forums', '0003_forum_job_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forum',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
