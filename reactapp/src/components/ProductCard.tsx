import React from "react";
import { Product } from "../utils/types";

interface ProductCardProps {
    product: Product;
  }

export default function ProductCard({ product }: ProductCardProps) {
    const priceAsString = product.price.toLocaleString('ru-RU');
    
    return(
        <article className="product-article">
            <img src={product.image} alt={product.title} className="product-article__img"/>
            <h5 className="product-article__price-h5">
                <span>{priceAsString}</span>
                <span>₽</span>
            </h5>
            <h6 className="product-article__name-h6">
                {product.title}
            </h6>
        </article>
    )
}