from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
import json
import holdem.card_range
import holdem.evaluator


def equilator(request):
    return render_to_response('equilator.html', {})


@csrf_exempt
def process_equilator_data(request):
    my_hand = str(request.POST['my_hand'])
    my_range = str(request.POST['my_range'])
    villain_range = str(request.POST['villain_range'])
    board = str(request.POST['board'])
    result = holdem.evaluator.process_equilator_data(my_hand, my_range, villain_range, board)
    mimetype = 'application/json'
    return HttpResponse(json.dumps(result), mimetype)
