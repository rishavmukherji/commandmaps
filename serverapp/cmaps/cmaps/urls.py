from django.conf.urls import patterns, include, url
from django.contrib import admin
from experiment import views

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'experiment.views.landing', name='landing'),
    url(r'^click',  'experiment.views.click', name = 'click'),
    url(r'^user',  'experiment.views.user', name = 'user'),
    url(r'^exit',  'experiment.views.exit', name = 'exit'),
    url(r'^forms',  'experiment.views.forms', name = 'forms'),
    url(r'^go', 'experiment.views.go', name = 'go'),
    url(r'^results', 'experiment.views.results2', name = 'results' ),
    url(r'^viewclicks', 'experiment.views.view_clicks', name = 'view_clicks' ),
    url(r'^viewuser/(?P<user>[0-9]*)', 'experiment.views.view_user', name = 'view_user' ),

    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
