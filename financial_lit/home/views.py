from django.shortcuts import render
from django.http import HttpResponse
from .models import User, Income
from django.views.decorators.csrf import csrf_exempt
import json
from django.forms.models import model_to_dict

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

@csrf_exempt
def income(request):
    if request.method == 'POST':
        json_data = request.read()
        data = json.loads(json_data)
        user = User.objects.filter(id = data['id'])
        print(user)
        income1 = Income.objects.filter(userId = data['id'])
        income2 = income1.all()
        #income2 = json.dumps(income1)
        print(type(income2))
        print(income2)
        print(income2.values())
        #print(income2.values['id'])
        print(income2.values('id'))
        a = list(income2.values())
        print(type(a[0]))
        return HttpResponse(json.dumps(a))

@csrf_exempt
def get_expenses(requests):
    if requests.method == 'POST':
        json_data = request.read()
        data = json.loads(json_data)
        user_id = data['id']
        expenses = Expense.objects.filter(id = user_id)
        expenses_response = expenses.all()
        reponse = list(expenses_response.values())
        return HttpResponse(json.dumps(reponse))


@csrf_exempt
def set_profile(request):
    if request.method == 'POST':
        json_data = request.read()
        data = json.loads(json_data)
        address = data['address']
        state = data['state']
        zipcode = data['zipcode']
        income = data['income']
        rent = data['rent']
        car_payment = data['car_payment']
        id = data['id']
        food = data['food']

        #find user
        user = User.objects.filter(id=id)

        #update user
        if bool(user):
            user[0].address = address
            user[0].rent = rent
            user[0].car_payment = car_payment
            user[0].income = income
            user[0].state = state
            user[0].zipcode = zipcode
            b[0].save()

        #add expense
        if bool(car_payment):
            expense = Expense(userId=user[0].id, amount = car_payment, source = "car_payment")
            expense.save()
        #add rent
        if bool(rent):
            rent = Expense(userId=user[0].id, amount = rent , source = "rent")
            rent.save()

        #add food
        if bool(food):
            food = Expense(userId=user[0].id, amount = food, source = "food")
            food.save()

        return HttpResponse()
    return Ht


