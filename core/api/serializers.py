from rest_framework import serializers
from core.models import FakeUser


class FakeUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FakeUser
        fields = ("username",)


class UploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FakeUser
        fields = ("username", "file", "title")

