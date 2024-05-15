from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('info', views.index, name='info'),
    path('profile', views.index, name='profile'),
    path('product/<int:product>', views.index, name='product'),
    path('payment', views.index, name='payment'),
    path('scam', views.index, name='scam'),
    path('api/get/category', views.category, name='category'),
    path('api/get/products', views.products, name='products'),
    path('api/get/reviews/<int:product>', views.reviews, name='reviews'),
    path('api/post/user', views.register_user, name='register-user'),
    path('api/post/review', views.post_review, name='post-review'),
    path('api/post/check/user/<str:login>', views.check_user, name='check-user'),
    path('api/get/user', views.user, name='get-user'),
    path('api/get/user/<int:user_id>', views.user_by_id, name='get-user-by-id')
]