# Generated by Django 4.0.6 on 2022-07-27 22:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogposts', '0006_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(default='', upload_to='uploaded_images/'),
        ),
    ]
