# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render_to_response
from django.template.context import RequestContext

from experiment.models import *
import json

def landing(request):
    return render_to_response('landing.html', {}, context_instance = RequestContext(request) )

def start(request):
    return render_to_response('start.html', {}, context_instance = RequestContext(request) )


def forms(request):
    return render_to_response('forms.html', {},context_instance = RequestContext(request))

def go(request):
    session = Session()
    session.save()
    this_id = session.id

    return render_to_response('experiment.html', {'id' : this_id}, context_instance = RequestContext(request) )



@csrf_exempt
def click(request):
    try:
        data = json.loads(request.body)
        click = Click(session_id = data['session'], time = data['time'], delta = data['delta'], button = data['button'],
                      correct = int(data['correct']), interface = data['interface'])
        click.save()
    except Exception, e:
        print str(e)

@csrf_exempt
def user(request):
    try:
        data = json.loads(request.body)
        user = User(session_id = data['session'], age = data['age'], gender = data['gender'], country = data['country'])
        user.save()
    except Exception, e:
        print str(e)

@csrf_exempt
def exit(request):
    try:
        data = json.loads(request.body)
        print data
        exit = Exit(session_id = data['session'], answer = data['answer'])
        exit.save()
    except Exception, e:
        print str(e)