from django.conf.urls.defaults import patterns, include, url

urlpatterns = patterns('',
    url(r'^equilator$', 'hu_equilator.views.equilator'),
    url(r'^process_equilator_data$', 'hu_equilator.views.process_equilator_data'),
    url(r'^get_data_from_pe$', 'hu_equilator.views.get_data_from_pe'),
    url(r'^pushfold$', 'pushfold.views.pushfold'),
)
