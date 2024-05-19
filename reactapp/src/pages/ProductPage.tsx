import React, { useState, useEffect } from 'react';
import { Product, Reviews } from '../utils/types';
import Review from '../components/Review';
import axios from 'axios';
import '../ProductStyle.scss';
import ShareIcon from "../assets/icons/share-icon.svg";
import ReviewForm from '../components/ReviewForm';
import { Link, useParams } from 'react-router-dom';

export default function ProductPage() {
    const { id } = useParams(); // Получение id из URL-параметров
    
    // Состояние для продукта и рецензий
    const [product, setProduct] = useState<Product | null>(null);
    const [reviews, setReviews] = useState<Reviews[]>([]);
    
    // Состояние для среднего рейтинга и флага для отслеживания получения данных
    const [averageRating, setAverageRating] = useState<number>(0);
    const [isDataFetched, setIsDataFetched] = useState(false);
    
    const totalReviews = reviews.length; // Количество рецензий

    const trimText = (text: string, limit: number): string => { // Функция для усечения текста
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    };

    const countReviewsByRate = (rate: number): number => { // Функция для подсчета рецензий по рейтингу
        return reviews.filter(review => review.rate === rate).length;
    };

    const percentageOfRate = (rate: number): number => { // Функция для вычисления процента рецензий по рейтингу
        const count = countReviewsByRate(rate);
        return (count / totalReviews) * 100;
    };

    useEffect(() => { // Получение продукта по его id
        axios.get('http://127.0.0.1:8000/api/get/products')
            .then(response => {
                const productData = response.data.products.find(
                    (item: Product) => item.id.toString() === id
                );
                setProduct(productData);
            })
            .catch(error => {
                console.error('Ошибка при получении продукта:', error);
            });
    }, [id]);

    useEffect(() => { // Получение рецензий по id продукта
        if (!isDataFetched) {
            axios.get(`http://127.0.0.1:8000/api/get/reviews/${id}`)
                .then(response => {
                    const reviewsData = response.data.review;
                    setReviews(reviewsData);
                    const totalRating = reviewsData.reduce((acc: number, review: Reviews) => acc + review.rate, 0);
                    const average = totalRating / reviewsData.length;
                    setAverageRating(reviewsData.length > 0 ? average : 0);
                    setIsDataFetched(true);
                })
                .catch(error => {
                    console.error('Ошибка при получении рецензий:', error);
                });
        }
    }, [id, isDataFetched]);

    if (!product) { // Отображение загрузки, если продукт не загружен
        return <div>Загрузка...</div>;
    }

    return (
        <section className="product-page">
            <section className="product-page__main-section">
                <img src={product.icons} className="product-page__img" alt="Product" />
                <div className="product-page__info-div">
                    <span className="product-page__text-span">
                        <h2 className="product-page__heading-h2">{product.title}</h2>
                        <p className="product-page__short-desc-div">{trimText(product.description, 200)}</p>
                    </span>
                    <div className="product-page__container-div">
                        <button className="product-page__share-button">
                            <img src={ShareIcon} alt="Share" />
                        </button>
                        <div className="product-page__price-buy-div">
                            <span className="product-page__price-span">{product.price} ₽</span>
                            <Link to={`/payment?price=${product.price}`} className="product-page__buy-link">Купить</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-page__info-section">
                <h3 className="product-page__block-heading">Описание</h3>
                <p className="product-page__desc">{product.description}</p>
                <ul className="product-page__tags-ul">
                    {product.tags.split('|').map((tag, index) => (
                        <li key={index} className="product-page__tag-li">{tag}</li>
                    ))}
                </ul>
            </section>
            <section className="product-page__reviews-section">
                <h3 className="product-page__block-heading">Отзывы</h3>
                <div className='reviews-section__rate-block'>
                    <div className='rate-block__rating'>
                        <span className='rate-block__rate-number'>{averageRating.toFixed(1)}</span>
                        <div className="rate-block__star-rating">
                            {/* Контейнер для отображения звезд, занимающий 100% ширины */}
                            <div className="star-rating__back-stars">
                                {/* Отображение звезд, которые не должны быть закрашены */}
                                {'★★★★★'.split('').map((star, i) => (
                                    <span key={`back-star-${i}`}>{star}</span>
                                ))}
                                {/* Контейнер для отображения звезд, которые должны быть закрашены */}
                                <div className="star-rating__front-stars" 
                                    style={{ width: `${(averageRating / 5) * 100}%` }}>
                                    {/* Отображение звезд, которые должны быть закрашены */}
                                    {'★★★★★'.split('').map((star, i) => (
                                        <span key={`front-star-${i}`}>{star}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rate-block__progressbars-group'>
                        {[5, 4, 3, 2, 1].map(rate => (
                            <div className='progressbars-group__progressbar-container' key={rate}>
                                <span className='rate-progressbar__rate-number'>{rate}</span>
                                <div className='progressbar-container__progressbar'>
                                    <div className='progressbar__active-line' style={{ width: `${percentageOfRate(rate)}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <ReviewForm productId={product.id.toLocaleString('ru-RU')} />
                <div className='product-page__reviews-container'>
                    {reviews.map(review => (
                        <Review key={review.id} review={review} />
                    ))}
                </div>
            </section>
        </section>
    );
}