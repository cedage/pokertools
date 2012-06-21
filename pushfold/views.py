from django.http import HttpResponse
from django.shortcuts import render_to_response

def pushfold(request):
    return render_to_response('pushfold.html', {})
