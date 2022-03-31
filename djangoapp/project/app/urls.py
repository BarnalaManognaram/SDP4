from .views import fun, fun2, create, insert, select, upload, save, display
from django.urls import path, include

urlpatterns = [
    path('', fun, name='fun'),
    path('page2/', fun2, name='fun2'),
    path('create/', create, name='create'),
    path('insert/', insert, name='insert'),
    path('select/', select, name='select'),
    path('upload/', upload, name ='upload'),
    path('save/', save, name='save'),
    path('display/', display, name='display'),
]