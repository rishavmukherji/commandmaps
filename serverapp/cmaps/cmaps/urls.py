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
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),

)
