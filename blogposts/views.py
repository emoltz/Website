from django.shortcuts import render
from django.views.generic import *
import logging
from blogposts.models import *

logger = logging.getLogger(__name__)


class BlogHomepage(ListView):
    model = Post
    context_object_name = "posts"
    template_name = "blogposts/blog_index.html"
    ordering = ['-created_on']


class BlogDetail(DetailView):
    model = Post
    context_object_name = "post"
    template_name = "blogposts/blog_detail.html"
