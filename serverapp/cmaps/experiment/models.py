from django.db import models

# Create your models here.

class Click(models.Model):
    button = models.CharField(max_length=300)
    time = models.BigIntegerField()
    delta = models.BigIntegerField()
    correct = models.IntegerField()
    interface = models.CharField(max_length=300)
    session = models.ForeignKey('Session')
    misc = models.CharField(max_length=3000, null=True)

class Exit(models.Model):
    session = models.ForeignKey('Session')
    cmap = models.IntegerField()
    ribbon = models.IntegerField()

class User(models.Model):
    age = models.CharField(max_length = 300)
    gender = models.CharField(max_length=300)
    country = models.CharField(max_length= 300)
    session = models.ForeignKey('Session')
    mouse = models.CharField(max_length= 300)
    misc = models.CharField(max_length=3000, null = True)

class Session(models.Model):
    pass