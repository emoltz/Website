from django.db import models


class Project(models.Model):
    title = models.CharField("Title of Project", max_length=255)
    body = models.TextField("Description of Project")
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField('Tags', related_name='projects', default='')
    image = models.ImageField(upload_to='uploaded_images/', default=None, null=True, blank=True)

    # unique fields:
    github_link = models.URLField("Github Link", default=None)

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"


class Tags(models.Model):
    # tags can be the tech stacks I am using for the project, e.g. React, Django, etc.
    tag_name = models.CharField(max_length=30)

    def __str__(self):
        return self.tag_name

    class Meta:
        verbose_name = "Tag"
        verbose_name_plural = "Tags"
