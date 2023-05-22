#!/bin/bash
python manage.py migrate
exec gunicorn twist.wsgi:application --bind unix:/tmp/gunicorn.sock
