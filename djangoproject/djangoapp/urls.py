from urllib import request
from django.urls import path
from djangoapp import views

urlpatterns = [
    path('tourist/', views.TouristList.as_view()),
     path('packages/', views.PackageList.as_view()),
     
   
]