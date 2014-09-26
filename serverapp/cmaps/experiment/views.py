# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template.context import RequestContext
from experiment.models import *
from django.forms.models import model_to_dict
import json
import io, csv

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

    return render_to_response('experiment2.html', {'id' : this_id}, context_instance = RequestContext(request) )

def view_clicks(request):
    clicks = list(Click.objects.all().order_by('-time'))

    output = '\n'.join(map (lambda c : str(model_to_dict(c)), clicks))

    return HttpResponse(output, content_type='text/plain')


@csrf_exempt
def click(request):
    try:
        data = json.loads(request.body)
        print data
        click = Click(session_id = data['session'], time = data['time'], delta = data['delta'], button = data['button'],
                      correct = int(data['correct']), interface = data['interface'])
        click.save()
    except Exception, e:
        print str(e)

    return HttpResponse("Success")

@csrf_exempt
def user(request):
    try:
        data = json.loads(request.body)
        user = User(session_id = data['session'], age = data['age'], gender = data['gender'], country = data['country'], mouse = data['mouse'])
        user.save()
    except Exception, e:
        print str(e)

    return HttpResponse("Success")

@csrf_exempt
def exit(request):
    try:
        data = json.loads(request.body)
        print data
        exit = Exit(session_id = data['session'], cmap = data['commandmaps-grade'],
                    ribbon = data['ribbon-grade'])
        exit.save()
    except Exception, e:
        print str(e)

    return HttpResponse("Success")



groups = {'slign-left' : 'home', 'numbers' : 'home', 'size': 'layout', 'picture': 'insert', 'direction': 'layout', 'bold': 'home', 'format': 'home', 'color': 'layout', 'strikethrough': 'home', 'chart': 'insert', 'deletecomment': 'review', 'newcomment': 'review', 'pagebreak': 'layout', 'bullets': 'home', 'smartart': 'insert', 'crossreference': 'review', 'table': 'insert', 'message': 'review', 'copy': 'home', 'paste': 'home', 'find': 'home', 'permissions': 'review', 'cut': 'home', 'reviewpane': 'review', 'blockauthors': 'review', 'clipart': 'insert', 'hyperlink': 'insert', 'bookmark': 'bookmark', 'margins': 'layout', 'watermark': 'layout', 'underline': 'home', 'shapes': 'insert', 'documentprotection': 'review', 'orientation': 'layout', 'italic': 'home', 'print': 'home', 'mail': 'review','replace' : 'home', 'subscript': 'home', 'borders': 'layout', 'columns': 'layout', 'superscript': 'home'}

def check_tabs(clicks):
    clicks = sorted(clicks, key = lambda x : x['time'])

    clicks[0]['switch'] = True
    for i in range(1, len(clicks)):
        clicks[i]['switch'] = (groups[clicks[i]['button']] == groups[clicks[i-1]['button']])
    return clicks

def get_click_stats(key_prefix, click):

    cmap_time = mean([c['delta'] for c in click if c['interface'] == 'False'])
    ribbon_time = mean([c['delta'] for c in click if c['interface'] == 'True'])
    cmap_errors = (len([c for c in click if c['interface'] == 'False' and c['correct'] == 0]))
    ribbon_errors = (len([c for c in click if c['interface'] == 'True' and c['correct'] == 0]))

    return {key_prefix + 'cmap_time' : cmap_time, key_prefix + 'cmap_errors' : cmap_errors, key_prefix + 'ribbon_time' : ribbon_time,
            key_prefix + 'ribbon_errors' : ribbon_errors}

def get_click_data(clicks):
    clicks = check_tabs(clicks)
    both =  get_click_stats('all_',clicks)
    switched = get_click_stats('switched_', filter(lambda x : x['switch'], clicks) )
    no_switch = get_click_stats('no_switch_', filter(lambda x : not x['switch'], clicks) )
    both.update(switched)
    both.update(no_switch)
    print both
    return both

def results(request):

    output = io.BytesIO()

    users = list(User.objects.all())
    exits = list(Exit.objects.all())
    clicks = list(Click.objects.all())
    sessions = list(Session.objects.all())

    rows = []
    for session in sessions:
        user = filter(lambda u : u.session_id == session.id, users)
        exit = filter(lambda e : e.session_id == session.id, exits)
        click = filter(lambda c : c.session_id == session.id, clicks)

        if len(user) == 1 and len(exit) == 1 and len(click) >=3:
            demographic = model_to_dict(user[0])
            demographic.update(model_to_dict(exit[0]))

            click = map(model_to_dict, click)

            row = demographic.copy()
            row.update(get_click_data(click))

            if 'misc' in row: del row['misc']
            rows.append(row)

    writer = csv.DictWriter(output, rows[0].keys())
    writer.writeheader()
    writer.writerows(rows)
    return HttpResponse('sep=;\n' + output.getvalue(), content_type='text/plain')


def check_switch(c1, c2):
    if c1 is None: return groups[c2['button']] != 'home'
    else: return groups[c1['button']] != groups[c2['button']]

def group_by_trial(clicks):
    trials = []

    n = 2

    cmap_trials = 0; ribbon_trials = 0
    running_time = 0
    errors = 0
    last_correct = None
    for c in clicks:
        running_time += c['delta']

        if c['correct'] == 1:
            trial = {'time' : running_time, 'switch' : check_switch(last_correct, c), 'errors' : errors }

            if c['interface'] == 'True':
                performance = cmap_trials >= n
                trial.update({'performance' : performance, 'interface' : 'cmap'})
                cmap_trials += 1


            elif c['interface'] == 'False':
                performance = ribbon_trials >= n
                trial.update({'performance' : performance, 'interface' : 'ribbon'})
                ribbon_trials += 1


            else:  raise Exception('interface is not a valid value')

            trials.append(trial)
            last_correct = c
            errors = 0
            running_time = 0

        else:
            errors += 1

    return trials

def mean(_list):
    if len(_list) == 0: return 0
    return sum (_list) / float(len(_list))

def one_interface_averages(trials, interface):
    trials = [t for t in trials if t['interface'] == interface]
    all = mean([t['time'] for t in trials])
    switch = mean([t['time'] for t in trials if t['switch']])
    no_switch =  mean([t['time'] for t in trials if not t['switch']])
    errors = sum([t['errors'] for t in trials])
    return {interface + '_all' : all, interface +'_switch' : switch, interface +'_no_switch' : no_switch, interface +'_errors' : errors}

def average_trials(trials):
    averages = one_interface_averages(trials, 'cmap')
    averages.update(one_interface_averages(trials, 'ribbon'))
    return averages

def get_user_data(clicks, exit, entry):
    if exit and entry and clicks:
        data  = model_to_dict(entry[0])
        data.update(model_to_dict(exit[0]))
        clicks = [model_to_dict(c) for c in list(clicks)]
        trials = group_by_trial(clicks)
        data.update(average_trials(trials))
        return data
    else:
        return {}

def view_user(request, user):
    user = int(user)
    clicks = Click.objects.filter(session_id = user).order_by('time')
    exit = Exit.objects.filter(session_id = user)
    entry = User.objects.filter(session_id = user)
    print clicks, exit, entry
    data = get_user_data(clicks, exit, entry)

    return HttpResponse(json.dumps(data, indent= 4), content_type="application/json")

def results2(request):

    output = io.BytesIO()

    entries = list(User.objects.all())
    exits = list(Exit.objects.all())
    clicks = list(Click.objects.all())
    sessions = list(Session.objects.all())

    rows = []
    for session in sessions:
        entry = filter(lambda u : u.session_id == session.id, entries)
        exit = filter(lambda e : e.session_id == session.id, exits)
        this_clicks = filter(lambda c : c.session_id == session.id, clicks)
        row = get_user_data(this_clicks, entry, exit)
        if len(row.keys()) > 0: rows.append(row)

    writer = csv.DictWriter(output, rows[0].keys())
    writer.writeheader()
    writer.writerows(rows)
    return HttpResponse('sep=;\n' + output.getvalue(), content_type='text/plain')
