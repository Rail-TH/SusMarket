import React from "react";
import { motion } from "framer-motion";
import { Product } from "../utils/types";

function ProductCard({ icons, title, price }: Product) {
    const priceAsString = price.toLocaleString('ru-RU');
    
    return(
        <motion.article
            className="product-article"
            whileTap={{scale: 0.98}}
            transition={{duration: 0.1, type: "spring"}}
            whileHover={{boxShadow: "-4px -4px 10px 0px rgba(0, 0, 0, 0.25),4px 4px 20px 0px rgba(0, 0, 0, 0.25)"}}
        >
            <img src={icons} alt={title} className="product-article__img" loading="lazy"/>
            <h5 className="product-article__price-h5">
                <span>{priceAsString}</span>
                <span>₽</span>
            </h5>
            <h6 className="product-article__name-h6">
                {title}
            </h6>
        </motion.article>
    )
}

export default ProductCard;