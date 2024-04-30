from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Category(models.Model):
    id = models.CharField('ID Категории', max_length=50, unique=True, primary_key=True, db_index=True)
    title = models.CharField('Название Категории', max_length=50)
    image = models.ImageField('Картинка категории', upload_to="icons/category/")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Product(models.Model):
    id = models.AutoField('ID Товара', unique=True, primary_key=True, db_index=True)
    title = models.CharField('Название Товара', max_length=50)
    description = models.TextField('Описание товара', max_length=300)
    price = models.PositiveIntegerField('Цена товара', validators=[
        MinValueValidator(1), MaxValueValidator(999)
    ])
    tags = models.TextField('Теги (Указывать через разделитель \'|\')', max_length=300)
    icons = models.ImageField('Иконка товара', upload_to="icons/product/")
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date = models.DateTimeField('Дата создания товара', auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'


class User(models.Model):
    id = models.AutoField('ID Пользователя', unique=True, primary_key=True, db_index=True)
    login = models.CharField('Логин', max_length=50)
    password = models.TextField('Пароль', max_length=200)
    date = models.DateTimeField('Дата создания пользователя', auto_now=True)

    def __str__(self):
        return self.login

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'


class Review(models.Model):
    id = models.AutoField('ID Отзыва', unique=True, primary_key=True, db_index=True)
    commentary = models.TextField('Комментарий отзыва', max_length=300)
    rate = models.PositiveIntegerField('Оценка', validators=[
        MinValueValidator(1), MaxValueValidator(5)
    ])
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    icons = models.ImageField('Изображение отзыва', null=True, upload_to="icons/reviews/")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField('Дата создания отзыва', auto_now=True)

    def __str__(self):
        return str(self.id)

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'
