from django import forms

from .models import *


class BlogForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('title', 'body', 'categories', 'image')
    # TODO how to handle submitting an image through the form??

