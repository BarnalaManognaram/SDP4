from django.db import models
from django.http import HttpResponse



# Create your models here.
class Tourists(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    mobile = models.CharField(max_length=11)
    password = models.CharField(max_length=20)
    
class Packages(models.Model):
    fromC = models.CharField(max_length=100)
    destC = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    guide = models.CharField(max_length=100)
    gnum = models.CharField(max_length=100)

