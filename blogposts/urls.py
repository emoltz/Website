from django.urls import path
from . import views

urlpatterns = [
    path('', views.BlogHomepage.as_view()),
    path('<int:pk>', views.BlogDetail.as_view(), name="notes_detail")
]