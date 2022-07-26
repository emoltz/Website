from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home.as_view(), name="home"),
    path('resume/', views.Resume.as_view(), name="resume"),
    path('aboutme/', views.AboutMe.as_view(), name="aboutme"),
    path('blog/', views.Blog.as_view(), name="blog"),
]