from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=200,null=True)
    last_name = models.CharField(max_length=200,null=True)
    dob = models.DateField(null=True)
    password = models.CharField(max_length=200,null=True)
    email = models.CharField(max_length=200,null=True)
    household_size = models.IntegerField(null=True)
    phone  = models.IntegerField(null=True)
    race  = models.IntegerField(null=True)
    grade_year = models.IntegerField(null=True)
    yearly_income   = models.IntegerField(null=True)

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