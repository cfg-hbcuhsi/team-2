from django.shortcuts import render
from django.http import HttpResponse
from .models import User
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
def test(request):
    return HttpResponse("hello")

@csrf_exempt
def login(request):
    if request.method == 'POST':
        json_data = request.read()
        data = json.loads(json_data)
        email = data['email']
        pw = data['password']
        user = User.objects.filter(email = email, password = pw)
        if bool(user):
            return HttpResponse(user[0].id)
        return HttpResponse('Unauthorized', status=401)

@csrf_exempt
def sign_up(request):
    if request.method == 'POST':
        json_data = request.read()
        data = json.loads(json_data)
        fname = data['First_Name']
        lname = data['Last_Name']
        email = data['email']
        pw = data['password']
        b = User(first_name = fname, last_name = lname, email = email, password = pw)
        b.save()
        return HttpResponse(b.id)
    return HttpResponse("")

def finance(request):
    return HttpResponse("")

def piechart(request):
    return HttpResponse("")




