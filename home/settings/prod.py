"""Use this for production"""

from .base import *
import django_heroku

DEBUG = False
ALLOWED_HOSTS += ["hng-leaderboards.herokuapp.com"]
WSGI_APPLICATION = "home.wsgi.prod.application"

django_heroku.settings(locals())
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}

CORS_ORIGIN_WHITELIST = ("http://localhost:3000",)
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]
STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "build", "static")

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "build", "media")
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
