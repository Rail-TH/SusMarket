import React from "react";

type ProductTypes = {
    ProductImg: string,
    ProductName: string,
    Price: number
}

export default function ProductCard({ProductName, ProductImg, Price}:ProductTypes) {
    const PriceAsString = Price.toString();
    
    return(
        <article className="product-article">
            <img src={ProductImg} alt="" className="product-article__img"/>
            <h5 className="product-article__price-h5">
                <span>{PriceAsString}</span>
                <span>₽</span>
            </h5>
            <h6 className="product-article__name-h6">
                {ProductName}
            </h6>
        </article>
    )
}