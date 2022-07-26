from django.urls import path
from . import views

urlpatterns = [
    path('', views.BlogHomepage.as_view()),
]