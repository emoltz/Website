from django.shortcuts import render
from django.views.generic import *


class Home(TemplateView):
    template_name = 'frontend/welcome.html'
    extra_context = {}
