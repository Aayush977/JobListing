# Generated by Django 3.1 on 2021-02-14 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forums', '0004_auto_20201104_2321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='desc',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='forum',
            name='description',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
