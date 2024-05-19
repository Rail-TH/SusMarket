import React from "react";
import { Link } from "react-router-dom";
import '../HomeStyle.scss';
import ProductCard from "../components/ProductCard";
import Banner from "../components/AdBanner";
import { Product } from "../utils/types";

type HomePageProps = {
    products: Product[];
}

export default function HomePage({ products }: HomePageProps) {
    return(
        <section className="home-page">
            <Banner />
            <div className="products-div">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <ProductCard
                            title={product.title}
                            tags={product.tags}
                            id={product.id}
                            category_id={product.category_id}
                            price={product.price}
                            icons={product.icons}
                            description={product.description}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}