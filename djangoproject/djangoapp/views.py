
from imaplib import _Authenticator
from django.shortcuts import redirect, render
from .models import Packages, Tourists
from .serializers import TouristSerializers,PackageSerializers
from rest_framework.generics import ListAPIView
# Create your views here.

class TouristList(ListAPIView):
    queryset = Tourists.objects.all()
    serializer_class =  TouristSerializers

class PackageList(ListAPIView):
    queryset = Packages.objects.all()
    serializer_class =  PackageSerializers




