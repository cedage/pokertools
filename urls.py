from django.conf.urls.defaults import patterns, include, url

urlpatterns = patterns('',
    url(r'^$', 'hu_equilator.views.equilator'),
    url(r'^process_equilator_data$', 'hu_equilator.views.process_equilator_data')
)
