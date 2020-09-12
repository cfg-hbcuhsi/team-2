from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    dob = models.DateField()
    password = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    household_size = models.IntegerField()
    phone  = models.IntegerField()
    race  = models.IntegerField()
    grade_year = models.IntegerField()
    yearly_income   = models.IntegerField()

class Expenses(models.Model):
    userId =  models.ForeignKey(User, on_delete=models.CASCADE)
    amount  = models.IntegerField()
    source = models.CharField(max_length=200)

class Income(models.Model):
    userId =  models.ForeignKey(User, on_delete=models.CASCADE)
    amount  = models.IntegerField()
    source = models.CharField(max_length=200)

class Goal(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    amount  = models.IntegerField()
    dollar_amount = models.IntegerField()
    description = models.CharField(max_length=200)