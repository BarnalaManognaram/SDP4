# Generated by Django 4.0.4 on 2022-05-14 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tourists',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('mobile', models.CharField(max_length=11)),
                ('password', models.CharField(max_length=20)),
            ],
        ),
        migrations.DeleteModel(
            name='Tourist',
        ),
    ]
