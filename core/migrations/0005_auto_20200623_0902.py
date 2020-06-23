# Generated by Django 2.2.6 on 2020-06-23 08:02

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_uploadedfile_added'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='uploadedfile',
            name='file',
        ),
        migrations.AddField(
            model_name='fakeuser',
            name='added',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='fakeuser',
            name='file',
            field=models.FileField(default='all', upload_to='files'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='uploadedfile',
            name='file_type',
            field=models.CharField(choices=[('1', 'JSON'), ('2', 'CSV')], default='1', max_length=15),
        ),
    ]
