import React, {useState, useEffect} from 'react';
import { Product, Reviews } from '../utils/types';
import Review from '../components/Review';
import axios from 'axios';
import '../ProductStyle.scss';
import ShareIcon from "../assets/icons/share-icon.svg";
import ReviewForm from '../components/ReviewForm';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
    function trimText(text: string, limit: number) {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }
    
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [reviews, setReviews] = useState<Reviews[]>([]);
    const [averageRating, setAverageRating] = useState<number>(0);
    const [isDataFetched, setIsDataFetched] = useState(false);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/get/products')
            .then(response => {
                const productData = response.data.products.find(
                    (item: Product) => item.id.toString() === id
                );
                setProduct(productData);
            })
            .catch(error => {
                console.error('There was an error fetching the products', error);
            });
    }, [id]);

    useEffect(() => {
        if (!isDataFetched) {
            axios
                .get(`http://127.0.0.1:8000/api/get/reviews/${id}`)
                .then(response => {
                    setReviews(response.data.review);
                    const totalRating = response.data.review.reduce((acc: number, review: Reviews) => acc + review.rate, 0);
                    const average = totalRating / response.data.review.length;
                    setAverageRating(average);
                    setIsDataFetched(true);
                })
                .catch(error => {
                    console.error('There was an error fetching the reviews', error)
                })
        }
    }, [id, isDataFetched])
    
    if (!product) {
        return <div>Loading</div>;
    }
    
    return(
        <section className="product-page">
            <section className="product-page__main-section">
                <img src={product.icons} className="product-page__img" alt="изображение товара"/>
                <div className="product-page__info-div">
                    <span className="product-page__text-span">
                        <h2 className="product-page__heading-h2">
                            {product.title}
                        </h2>
                        <p className="product-page__short-desc-div">
                            {trimText(product.description, 200)}
                        </p>
                    </span>
                    <div className="product-page__container-div">
                        <button className="product-page__share-button">
                            <img src={ShareIcon as unknown as string} alt="" />
                        </button>
                        <div className="product-page__price-buy-div">
                            <span className="product-page__price-span">
                                {product.price} ₽
                            </span>
                            <a href="/payment" className="product-page__buy-link">
                                Купить
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-page__info-section">
                <h3 className="product-page__block-heading">
                    Описание
                </h3>
                <p className="product-page__desc">
                    {product.description}
                </p>
                <ul className="product-page__tags-ul">
                    {(product.tags.split('|')).map((tag, index) => (
                        <li key={index} className="product-page__tag-li">
                            {tag}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="product-page__reviews-section">
                <h3 className="product-page__block-heading">
                    Отзывы
                </h3>
                <div className='reviews-section__rate-block'>
                    <div className='rate-block__rating'>
                        <span className='rate-block__rate-number'>
                        {averageRating.toFixed(1)}
                        </span>
                        <div className="rate-block__star-rating">
                            <div className="star-rating__back-stars">
                                {'★★★★★'.split('').map((star, i) => (
                                <span key={`back-star-${i}`}>{star}</span>
                                ))}
                                <div className="star-rating__front-stars" style={{ width: `${(averageRating / 5) * 100}%` }}>
                                {'★★★★★'.split('').map((star, i) => (
                                    <span key={`front-star-${i}`}>{star}</span>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rate-block__progressbars-group'>
                        <div className='progressbars-group__progressbar-container'>
                            <span className='rate-progressbar__rate-number'>
                                5
                            </span>
                            <div className='progressbar-container__progressbar'>
                                <div className='progressbar__active-line'></div>
                            </div>
                        </div>
                        <div className='progressbars-group__progressbar-container'>
                            <span className='rate-progressbar__rate-number'>
                                4
                            </span>
                            <div className='progressbar-container__progressbar'>
                                <div className='progressbar__active-line'></div>
                            </div>
                        </div>
                        <div className='progressbars-group__progressbar-container'>
                            <span className='rate-progressbar__rate-number'>
                                3
                            </span>
                            <div className='progressbar-container__progressbar'>
                                <div className='progressbar__active-line'></div>
                            </div>
                        </div>
                        <div className='progressbars-group__progressbar-container'>
                            <span className='rate-progressbar__rate-number'>
                                2
                            </span>
                            <div className='progressbar-container__progressbar'>
                                <div className='progressbar__active-line'></div>
                            </div>
                        </div>
                        <div className='progressbars-group__progressbar-container'>
                            <span className='rate-progressbar__rate-number'>
                                1
                            </span>
                            <div className='progressbar-container__progressbar'>
                                <div className='progressbar__active-line'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ReviewForm />
                <div className='product-page__reviews-container'>
                    {reviews.map((review) => (
                        <Review key={review.id} review={review} />
                    ))}
                </div>
            </section>
        </section>
    )
}