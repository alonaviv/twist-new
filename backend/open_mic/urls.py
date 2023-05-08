from django.urls import path
from . import views

urlpatterns = [
    path('current_time', views.get_time, name='current_time'),
]
