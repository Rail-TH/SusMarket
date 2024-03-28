import React from "react";
import '../ProductStyle.scss';
import ProductImage from "../assets/img/product-image-1.webp";
import ShareIcon from "../assets/icons/share-icon.svg";

export default function ProductPage() {
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
                            Тот самый легендарный шоколад, который выпустил один из самых известных блогеров - MrBeast!Представляем вам шоколадную плитку, созданную самым популярным блогером в мире - Mr.Beast feastables! Отныне, вы можете наслаждаться самой вкусной шоколадной плиткой на планете, которая удивит вас своим непревзойденным вкусом и качеством.Шоколад "Mr. Beast Feastables" - это вкусный сладкий десерт, специально созданный для поклонников блогера Мистера Биста. Он представляет собой комбинацию изысканного молочного шоколада с разнообразными начинками, которые подчеркивают его оригинальность и неповторимый вкус.Каждый кусочек "Mr. Beast Feastables" - это маленький рай для сладкоежек, так как он сочетает в себе шоколадные ноты, нежную текстуру и уникальное сочетание ингредиентов. В каждой упаковке можно найти различные варианты начинок, такие как карамель, орехи, маршмеллоу, кукурузные хлопья и другие вкусные сюрпризы. Этот шоколадный "feast" отражает всю энергию и креативность блогера Мистера Биста, который славится своими необычными и увлекательными челленджами.Не упустите возможность попробовать настоящий шедевр в мире шоколада!
                        </p>
                    </span>
                    <div className="product-page__container-div">
                        <div className="product-page__rating-share-div">
                            <div className="product-page__rating-div">

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
        </section>
    )
}