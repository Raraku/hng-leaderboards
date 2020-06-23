from rest_framework.generics import ListAPIView, RetrieveAPIView
from core.models import FakeUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.viewsets import ModelViewSet
from .serializers import FakeUserSerializer, UploadedFileSerializer
from rest_framework.permissions import AllowAny
import json
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser


class FakeUserView(ModelViewSet):
    lookup_field = "username"
    serializer_class = FakeUserSerializer
    queryset = FakeUser.objects.all()


class UploadedFileViewset(ModelViewSet):
    serializer_class = UploadedFileSerializer
    queryset = FakeUser.objects.all()
    parser_classes = (MultiPartParser, FormParser)
    lookup_field = "username"

    @action(detail=False, methods=["get"])
    def get_uploaded_file(self, request, username):
        queryset = Fakeuser.objects.get(username=username)
        file = UploadedFileSerializer(queryset, context={"request": request})
        return Response(file.data, status=status.HTTP_200_OK)


class PostFileView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        posts_serializer = UploadedFileSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("error", posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
