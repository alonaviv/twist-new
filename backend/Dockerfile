FROM  python:3.8.10

ENV PYTHONUNBUFFERED=1

WORKDIR /api

RUN pip install django djangorestframework

COPY . .

EXPOSE 8000
