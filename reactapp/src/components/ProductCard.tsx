import React from "react";
import { Product } from "../utils/types";

export default function ProductCard({ icons, title, price }: Product) {
    const priceAsString = price.toLocaleString('ru-RU');
    
    return(
        <article className="product-article">
            <img src={icons} alt={title} className="product-article__img"/>
            <h5 className="product-article__price-h5">
                <span>{priceAsString}</span>
                <span>₽</span>
            </h5>
            <h6 className="product-article__name-h6">
                {title}
            </h6>
        </article>
    )
}