from django.shortcuts import render
from django.views.generic import *

from blogposts.models import *


class BlogHomepage(ListView):
    model = Post
    context_object_name = "posts"
    template_name = "blogposts/blog_index.html"
