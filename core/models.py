from django.db.models.signals import post_save
from django.conf import settings
from django.db import models
from django.db.models import Sum
from django.shortcuts import reverse
from django_countries.fields import CountryField


class FakeUser(models.Model):
    username = models.CharField(max_length=30)
    file = models.FileField(upload_to="files", default="p.json")
    title = models.CharField(max_length=50, default="myfile")
    added = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.title = str(self.username) + "'s file"
        super(FakeUser, self).save(*args, **kwargs)
