release : python manage.py migrate
web: bin/start-nginx gunicorn -c gunicorn.conf home.wsgi.prod --log-file -