import React, { useState } from 'react';
import '../ProductStyle.scss';
import ProductImage from "../assets/img/product-image-1.webp";
import ShareIcon from "../assets/icons/share-icon.svg";

export default function ProductPage() {
    const [selectedRating, setSelectedRating] = useState(1);

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRating(Number(event.target.value));
    };
    
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
                            <div className="product-page__rating-div">
                                <div className="rating-div__stars-container">
                                    <input 
                                        type="radio" 
                                        className="rating-div__star-radio" 
                                        name="rating" value={1} 
                                        aria-label="Плохо" 
                                        checked={selectedRating === 1} 
                                        onChange={handleRatingChange}
                                    />
                                    <input 
                                        type="radio" 
                                        className="rating-div__star-radio" 
                                        name="rating" value={2} 
                                        aria-label="Удовлетворительно" 
                                        checked={selectedRating === 2} 
                                        onChange={handleRatingChange}
                                    />
                                    <input 
                                        type="radio" 
                                        className="rating-div__star-radio" 
                                        name="rating" value={3} 
                                        aria-label="Нормально" checked={selectedRating === 3} 
                                        onChange={handleRatingChange}
                                    />
                                    <input 
                                        type="radio" 
                                        className="rating-div__star-radio" 
                                        name="rating" 
                                        value={4} 
                                        aria-label="Хорошо" 
                                        checked={selectedRating === 4} 
                                        onChange={handleRatingChange}
                                    />
                                    <input 
                                        type="radio" 
                                        className="rating-div__star-radio" 
                                        name="rating" 
                                        value={5} 
                                        aria-label="Отлично" 
                                        checked={selectedRating === 5} 
                                        onChange={handleRatingChange}
                                    />
                                </div>
                                <span className="rating-div__rate-value">
                                    {selectedRating}
                                </span>
                            </div>
                            <button className="product-page__share-button">
                                <img src={ShareIcon as unknown as string} alt="" />
                            </button>
                        </div>
                        <div className="product-page__price-buy-div">
                            <span className="product-page__price-span">
                                150 ₽
                            </span>
                            <a href="/" className="product-page__buy-link">
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
            </section>
        </section>
    )
}