import React from "react";
import { Product } from "../utils/types";

interface ProductCardProps {
    product: Product;
  }

export default function ProductCard({ product }: ProductCardProps) {
    const PriceAsString = product.price.toString();
    
    return(
        <article className="product-article">
            <img src={product.image} alt="" className="product-article__img"/>
            <h5 className="product-article__price-h5">
                <span>{PriceAsString}</span>
                <span>₽</span>
            </h5>
            <h6 className="product-article__name-h6">
                {product.name}
            </h6>
        </article>
    )
}