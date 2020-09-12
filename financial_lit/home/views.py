from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def test(request):

    return HttpResponse("hello")

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        pw = request.POST['password']
        user = User.objects.filter(email = email)
        if user != None and user.password == pw:
            return user.id
        return HttpResponse('Unauthorized', status=401)

def sign_up(request):
    if request.method == 'POST':
        fname = request.POST['First Name']
        lname = request.POST['Last Name']
        email = request.POST['email']
        pw = request.POST['password']

    return HttpResponse("")

def finance(request):
    return HttpResponse("")

def piechart(request):
    return HttpResponse("")




