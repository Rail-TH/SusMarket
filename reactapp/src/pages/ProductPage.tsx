import React, { useState, useEffect, useCallback } from 'react';
import { Product, Reviews } from '../utils/types';
import Review from '../components/Review';
import axios from 'axios';
import '../ProductStyle.scss';
import ShareIcon from "../assets/icons/share-icon.svg";
import ReviewForm from '../components/ReviewForm';
import { Link, useParams } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams(); // Получение id из URL-параметров
    
    // Состояние для продукта и рецензий
    const [product, setProduct] = useState<Product | null>(null);
    const [reviews, setReviews] = useState<Reviews[]>([]);
    
    // Состояние для среднего рейтинга
    const [averageRating, setAverageRating] = useState<number>(0);
    
    const fetchProductAndReviews = useCallback(async () => {
        try {
            const baseUrl = window.location.origin;
            const [productResponse, reviewsResponse] = await Promise.all([
                axios.get(`${baseUrl}/api/get/products`),
                axios.get(`${baseUrl}/api/get/reviews/${id}`)
            ]);

            const productData = productResponse.data.products.find((item: Product) => item.id.toString() === id);
            setProduct(productData);

            const reviewsData = reviewsResponse.data.review;
            setReviews(reviewsData);

            const totalRating = reviewsData.reduce((acc: number, review: Reviews) => acc + review.rate, 0);
            setAverageRating(reviewsData.length > 0 ? totalRating / reviewsData.length : 0);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }, [id]);

    useEffect(() => {
        fetchProductAndReviews();
    }, [fetchProductAndReviews]);

    const trimText = (text: string, limit: number): string => 
        text.length > limit ? text.substring(0, limit) + '...' : text;

    const countReviewsByRate = useCallback((rate: number): number => 
        reviews.filter(review => review.rate === rate).length, [reviews]);

    const percentageOfRate = useCallback((rate: number): number => 
        (countReviewsByRate(rate) / reviews.length) * 100, [countReviewsByRate, reviews.length]);

    if (!product) {
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
                            <div className="star-rating__back-stars">
                                {'★★★★★'.split('').map((star, i) => (
                                    <span key={`back-star-${i}`}>{star}</span>
                                ))}
                                <div className="star-rating__front-stars" 
                                    style={{ width: `${(averageRating / 5) * 100}%` }}>
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

export default ProductPage;