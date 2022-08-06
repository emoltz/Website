from django.contrib.auth.decorators import login_required
from django.urls import path
from . import views

urlpatterns = [
    path('', views.BlogHomepage.as_view(), name="blog_home"),
    path('new/', views.BlogCreate.as_view(), name='blog_create'),
    path('<int:pk>', views.BlogDetail.as_view(), name="blog_detail"),
    path('<int:pk>/edit',
         views.logged_in_switch_view(
             views.BlogUpdate.as_view(), views.Forbidden.as_view()
         ), name="blog_edit"),
]