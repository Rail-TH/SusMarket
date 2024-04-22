from django.urls import path
from . import views

urlpatterns = [
    path('get/category', views.category, name='category'),
    path('get/products', views.products, name='products'),
    path('get/reviews/<int:product>', views.reviews, name='reviews'),
    path('post/user/<str:login>/<str:password>', views.register_user, name='register-user'),
    path('post/check/user/<str:login>', views.check_user, name='check-user'),
    path('get/user/<str:login>/<str:password>', views.user, name='get-user')
]