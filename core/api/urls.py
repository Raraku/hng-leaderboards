from django.urls import path
from .views import FakeUserView, UploadedFileViewset, PostFileView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"fakeuser", FakeUserView)
router.register(r"file", UploadedFileViewset)
urlpatterns = [
    path("uploadfile/", PostFileView.as_view(), name="posts_list"),
]
urlpatterns += router.urls

