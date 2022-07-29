from django.urls import path
from . import views

urlpatterns = [
    path('', views.BlogHomepage.as_view(), name="blog_home"),
    path('<int:pk>', views.BlogDetail.as_view(), name="blog_detail")
]