import hashlib

from django.http import JsonResponse, HttpRequest, HttpResponse
from django.shortcuts import render

from SusMarketBackend.models import Category, Product, Review, User


def index(request):
    return render(request, 'index.html')


def category(request: HttpRequest):
    categoryObj = {"categories": list(Category.objects.all().values())}
    return JsonResponse(categoryObj)


def products(request: HttpRequest):
    productObj = {"products": list(Product.objects.all().values())}
    return JsonResponse(productObj)


def reviews(request: HttpRequest, product: int):
    reviewObj = {"review": list(Review.objects.filter(product_id=product).values())}
    return JsonResponse(reviewObj)


def register_user(request: HttpRequest, login: str, password: str):
    User.objects.create(login=login, password=hashlib.md5(password).hexdigest())
    return HttpResponse('{error: "Null"}')


def check_user(request: HttpRequest, login: str):
    checkObj = {"status": True if User.objects.filter(login=login).first() is None else False}
    return JsonResponse(checkObj)


def user(request: HttpRequest, login: str, password: str):
    userObj = {"user": User.objects.filter(login=login, password=hashlib.md5(password).hexdigest()).first()}
    return JsonResponse(userObj)
