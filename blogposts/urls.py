from django.urls import path
from . import views

urlpatterns = [
    path('', views.BlogHomepage.as_view(), name="blog_home"),
    path('new/', views.BlogCreate.as_view(), name='blog_create'),
    path('<int:pk>', views.BlogDetail.as_view(), name="blog_detail"),
]