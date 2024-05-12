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


def post_review(request: HttpRequest, commentary: str, rate: int, product: int, icon: str, user_id: int):
    Review.objects.create(commentary=commentary, rate=rate, product_id=product, icons=icon, user_id=user_id)
    return HttpResponse('{error: "Null"}')


def check_user(request: HttpRequest, login: str):
    checkObj = {"status": True if User.objects.filter(login=login).first() is None else False}
    return JsonResponse(checkObj)


def user(request: HttpRequest, login: str, password: str):
    userObj = {"user": User.objects.filter(login=login, password=hashlib.md5(password).hexdigest()).first()}
    return JsonResponse(userObj)


def user_by_id(request: HttpRequest, user_id: int):
    userObj = {"user": User.objects.filter(id=user_id).first()}
    return JsonResponse(userObj)
