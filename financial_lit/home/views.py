from django.shortcuts import render
from django.http import HttpResponse
from .models import User

# Create your views here.
def test(request):

    return HttpResponse("hello")

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        pw = request.POST['password']
        user = User.objects.filter(email = email)
        if bool(user) and user.password == pw:
            return HttpResponse(user.id)
        return HttpResponse('Unauthorized', status=401)

def sign_up(request):
    if request.method == 'POST':
        fname = request.POST['First Name']
        lname = request.POST['Last Name']
        email = request.POST['email']
        pw = request.POST['password']
        b = User(first_name = fname, last_name = lname, email = email, password = pw)
        b.save()
        return HttpResponse(b.id)

def finance(request):
    return HttpResponse("")

def piechart(request):
    return HttpResponse("")




