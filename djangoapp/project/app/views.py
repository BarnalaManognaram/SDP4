from django.shortcuts import render
import sqlite3 as db
import mysql.connector as sql
from .models import Sample
from .forms import SampleForm

# con = db.connect('data.db', check_same_thread=False)
con = sql.connect(host='localhost', user='root', password='Ram@9059', database='mydb');
cur = con.cursor()


# Create your views here.

def fun(request):
    return render(request, 'index.html', {})


def fun2(request):
    return render(request, 'page2.html', {})


def create(request):
    cur.execute("create table test (id int, name varchar(10))")
    con.commit()
    return render(request, 'page2.html', {})


def insert(request):
    cur.execute("insert into test values (1, 'name1')")
    con.commit()
    return render(request, 'page2.html', {})


def select(request):
    cur.execute("select * from test")
    result = cur.fetchall()
    print(result)
    return render(request, 'page2.html', {})


def upload(request):
    cform = SampleForm();
    return render(request, 'upload.html', {'cform': cform, });


def display(request):
    sam_db = Sample.objects.all();
    return render(request, 'display.html', {'sam_db': sam_db});


def save(request):
    if request.method == "POST":
        cform = SampleForm(request.POST);
        if cform.is_valid():
            try:
                data = cform.save(commit=False);
                data.save();
                return render(request, 'index.html', {});
            except:
                pass
    else:
        pass;
    return render(request, 'page2.html', {});
