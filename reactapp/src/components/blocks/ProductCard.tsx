import React from "react";
import Pefsfsdf from "./image-placeholder.png"

type ProductTypes = {
    ProductImg: any,
    ProductName: string,
    Price: number
}

export default function ProductCard({ProductName, ProductImg, Price}:ProductTypes) {
    return(
        <article className="product-article">
            <img src={Pefsfsdf} alt="" className="product-article__img"/>
            <h5 className="product-article__price-h5">{Price} ₽</h5>
            <h6 className="product-article__name-h6">{ProductName}</h6>
        </article>
    )
}