from datetime import datetime, date
import calendar

from django.shortcuts import render
from django.views.generic import *


class Home(TemplateView):
    template_name = 'frontend/welcome.html'
    extra_context = {'weekday': calendar.day_name[date.today().weekday()]}

