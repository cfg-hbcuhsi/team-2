from django.shortcuts import render
from django.http import HttpResponse
from .models import User
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def test(request):
    return HttpResponse("hello")

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        pw = request.POST.get('password')
        user = User.objects.filter(email = email)
        if bool(user) and user.password == pw:
            return HttpResponse(user.id)
        return HttpResponse('Unauthorized', status=401)
@csrf_exempt
def sign_up(request):
    if request.method == 'POST':
        fname = request.POST.get('First_Name')
        lname = request.POST.get('Last_Name')
        email = request.POST.get('email')
        pw = request.POST.get('password')
        b = User(first_name = "jalkjfda", last_name = lname, email = email, password = pw)
        b.save()
        return HttpResponse(b.id)
    return HttpResponse("")

def finance(request):
    return HttpResponse("")

def piechart(request):
    return HttpResponse("")




