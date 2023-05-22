from django.db import models

class TestModel(models.Model):
    test_field = models.CharField(max_length=100)
    another_field = models.CharField(max_length=50, default='')
