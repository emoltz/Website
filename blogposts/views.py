from django.views.generic import *
from blogposts.models import *
from .forms import *
from django.contrib.auth.decorators import login_required


class BlogCreate(CreateView):
    model = Post
    fields = ['title', 'body', 'categories', 'image']
    template_name = 'blogposts/blog_form.html'
    success_url = '/blog'


class BlogUpdate(UpdateView):
    model = Post
    fields = ['title', 'body', 'categories']
    template_name = 'blogposts/blog_edit.html'
    context_object_name = 'posts'
    success_url = '/blog'


class BlogHomepage(ListView):
    model = Post
    context_object_name = "posts"
    template_name = "blogposts/blog_index.html"
    ordering = ['-created_on']


class BlogDetail(DetailView):
    model = Post
    context_object_name = "post"
    template_name = "blogposts/blog_detail.html"
