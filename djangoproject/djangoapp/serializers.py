from dataclasses import fields
from rest_framework import serializers
from rest_framework.response import Response
from .models import Tourists,Packages
class TouristSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tourists
        fields = ('name', 'email', 'mobile')

class PackageSerializers(serializers.ModelSerializer):
    class Meta:
        model = Packages
        fields = ('fromC', 'destC', 'price','guide','gnum')

def post(self, request):
        serializer =TouristSerializers(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)