from datetime import datetime, date
import calendar

from django.views.generic import *


class Home(TemplateView):
    template_name = 'frontend/welcome.html'
    extra_context = {'weekday': calendar.day_name[date.today().weekday()]}


class Resume(TemplateView):
    template_name = 'frontend/resume.html'
    extra_context = {}


class AboutMe(TemplateView):
    template_name = 'frontend/aboutme.html'
    extra_context = {}

class Blog(TemplateView):
    template_name = 'frontend/blog.html'
    extra_context = {}
