from .models import Sample
from django import forms


class SampleForm(forms.ModelForm):
    class Meta:
        model = Sample;
        fields = ['id', 'name'];
