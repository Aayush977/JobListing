from django.shortcuts import render

# Create your views here.
def forums(request):
    return render(request, 'portfolio.html')