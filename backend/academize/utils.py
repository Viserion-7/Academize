from django.contrib.auth import get_user_model
from django.shortcuts import render, HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

username = None

@csrf_exempt
def username_view(request):
    global username
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('current_username')
        print(username)
        print("-------------------")
        return_username()
        return JsonResponse({'username': username})

    return HttpResponse("error: not a POST request")

def return_username():
    global username
    if username:
        return username
