from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
import json
import holdem.card_range
import holdem.evaluator
import win32com.client
import pythoncom
import threading


def equilator(request):
    return render_to_response('equilator.html', {})


@csrf_exempt
def process_equilator_data(request):
    my_hand = str(request.POST['my_hand'])
    my_range = str(request.POST['my_range'])
    villain_range = str(request.POST['villain_range'])
    board = str(request.POST['board'])
    result = holdem.evaluator.process_equilator_data(my_hand,
		    my_range, villain_range, board)
    return HttpResponse(json.dumps(result), 'application/json')


def _coInitialize():
    if threading.currentThread().getName() != 'MainThread':
        pythoncom.CoInitialize()


def _coUninitialize():
    if threading.currentThread().getName() != 'MainThread':
        pythoncom.CoUninitialize()


@csrf_exempt
def get_data_from_pe(request):
    _coInitialize()
    autoit = win32com.client.Dispatch('AutoItX3.Control')

    def get_text_of_edit_control(n):
        return autoit.ControlGetText('Poker', '', 'Edit%s' % (n,))

    data = {}

    data['my_hand'] = get_text_of_edit_control(5)
    data['my_range'] = get_text_of_edit_control(6)
    data['villain_range'] = get_text_of_edit_control(7)
    data['board'] = (get_text_of_edit_control(31) + 
                     get_text_of_edit_control(32) + 
	             get_text_of_edit_control(33))

    return HttpResponse(json.dumps(data), 'application/json')
