import React from 'react';
import Review from '../components/Review';
import '../ProductStyle.scss';
import ProductImage from "../assets/img/product-image-1.webp";
import ShareIcon from "../assets/icons/share-icon.svg";
import ReviewForm from '../components/ReviewForm';

interface StarRatingProps {
    value: number;
}

export default function ProductPage({ value }: StarRatingProps) {
    return(
        <section className="product-page">
            <section className="product-page__main-section">
                <img src={ProductImage} className="product-page__img" alt="изображение товара"/>
                <div className="product-page__info-div">
                    <span className="product-page__text-span">
                        <h2 className="product-page__heading-h2">
                            Шоколадка Mr. Beast
                        </h2>
                        <p className="product-page__short-desc-div">
                            Тот самый легендарный шоколад, который выпустил один из самых известных блогеров - 
                            <tr></tr>
                            MrBeast!Представляем вам шоколадную плитку, созданную самым популярным блогером в мире - Mr.Beast feastables! Отныне, вы можете наслаждаться самой вкусной шоколадной плиткой на планете, которая удивит вас своим непревзойденным вкусом и качеством.Шоколад "Mr. Beast Feastables" - это вкусный сладкий десерт, специально созданный для поклонников блогера Мистера Биста. Он представляет собой комбинацию изысканного молочного шоколада с разнообразными начинками, которые подчеркивают его оригинальность и неповторимый вкус.Каждый кусочек "Mr. Beast Feastables" - это маленький рай для сладкоежек, так как он сочетает в себе шоколадные ноты, нежную текстуру и уникальное сочетание ингредиентов. В каждой упаковке можно найти различные варианты начинок, такие как карамель, орехи, маршмеллоу, кукурузные хлопья и другие вкусные сюрпризы. Этот шоколадный "feast" отражает всю энергию и креативность блогера Мистера Биста, который славится своими необычными и увлекательными челленджами.Не упустите возможность попробовать настоящий шедевр в мире шоколада!
                        </p>
                    </span>
                    <div className="product-page__container-div">
                        <div className="product-page__rating-share-div">
                            <button className="product-page__share-button">
                                <img src={ShareIcon as unknown as string} alt="" />
                            </button>
                        </div>
                        <div className="product-page__price-buy-div">
                            <span className="product-page__price-span">
                                150 ₽
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
                    Тот самый легендарный шоколад, который выпустил один из самых известных блогеров - MrBeast!Представляем вам шоколадную плитку, созданную самым популярным блогером в мире - Mr.Beast feastables! Отныне, вы можете наслаждаться самой вкусной шоколадной плиткой на планете, которая удивит вас своим непревзойденным вкусом и качеством.Шоколад "Mr. Beast Feastables" - это вкусный сладкий десерт, специально созданный для поклонников блогера Мистера Биста. Он представляет собой комбинацию изысканного молочного шоколада с разнообразными начинками, которые подчеркивают его оригинальность и неповторимый вкус.Каждый кусочек "Mr. Beast Feastables" - это маленький рай для сладкоежек, так как он сочетает в себе шоколадные ноты, нежную текстуру и уникальное сочетание ингредиентов. В каждой упаковке можно найти различные варианты начинок, такие как карамель, орехи, маршмеллоу, кукурузные хлопья и другие вкусные сюрпризы. Этот шоколадный "feast" отражает всю энергию и креативность блогера Мистера Биста, который славится своими необычными и увлекательными челленджами.Не упустите возможность попробовать настоящий шедевр в мире шоколада!
                </p>
                <ul className="product-page__tags-ul">
                    <li className="product-page__tag-li">
                        Кондитерский
                    </li>
                    <li className="product-page__tag-li">
                        Шоколад
                    </li>
                    <li className="product-page__tag-li">
                        Mr. Beast
                    </li>
                    <li className="product-page__tag-li">
                        Молочный шоколад
                    </li>
                </ul>
            </section>
            <section className="product-page__reviews-section">
                <h3 className="product-page__block-heading">
                    Отзывы
                </h3>
                <div className='reviews-section__rate-block'>
                    <div className='rate-block__rating'>
                        <span className='rate-block__rate-number'>
                            {value}
                        </span>
                        <div className="rate-block__star-rating">
                            <div className="star-rating__back-stars">
                                {'★★★★★'.split('').map((star, i) => (
                                <span key={`back-star-${i}`}>{star}</span>
                                ))}
                                <div className="star-rating__front-stars" style={{ width: `${(value / 5) * 100}%` }}>
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
                    <Review />
                </div>
            </section>
        </section>
    )
}