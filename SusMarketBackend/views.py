import hashlib

from django.http import JsonResponse, HttpRequest, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render

from SusMarketBackend.models import Category, Product, Review, User


def index(request, product: int = 0):
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


def register_user(request: HttpRequest):
    if request.GET:
        login = request.GET["login"]
        password = request.GET["password"]
        user_obj = User.objects.create(login=login, password=hashlib.md5(str(password).encode('utf-8')).hexdigest())
        return JsonResponse({"user": list(User.objects.filter(id=user_obj.id).values())})
    return HttpResponse('{error: "You doing not right"}')


@csrf_exempt
def post_review(request: HttpRequest):
    if request.method == "POST":
        commentary = request.POST["commentary"]
        rate = request.POST["rate"]
        product = request.POST["product"]
        try:
            icon = request.POST["icon"]
        except Exception:
            icon = None
        user_id = request.POST["user_id"]
        Review.objects.create(commentary=commentary, rate=int(rate), product_id=product, icons=icon, user_id=user_id)
        return HttpResponse('{error: "Null"}')
    return HttpResponse('{error: "You doing not right"}')


def check_user(request: HttpRequest, login: str):
    checkObj = {"status": True if User.objects.filter(login=login).first() is None else False}
    return JsonResponse(checkObj)


def user(request: HttpRequest):
    if request.GET:
        login = request.GET["login"]
        password = request.GET["password"]
        userObj = {"user": list(User.objects.filter(login=login, password=hashlib.md5(str(password).encode('utf-8')).hexdigest()).values())}
        return JsonResponse(userObj)
    return HttpResponse('{error: "You doing not right"}')


def user_by_id(request: HttpRequest, user_id: int):
    userObj = {"user": list(User.objects.filter(id=user_id).values())}
    return JsonResponse(userObj)
