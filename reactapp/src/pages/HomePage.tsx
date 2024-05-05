import React from "react";
import '../HomeStyle.scss'
import ProductCard from "../components/ProductCard";
import Banner from "../components/AdBanner";
import { Product, Category } from "../utils/types";

interface HomePageProps {
    products: Product[];
    selectedCategory: Category | 'all';
}

export default function HomePage({ products, selectedCategory }: HomePageProps) {
    return(
        <section className="home-page">
            <Banner />
            <div className="products-div">
                {products.map((product) => (
                    <ProductCard
                        title={product.title}
                        icons={product.icons}
                        price={product.price}
                        category_id={product.category_id}
                        id={product.id}
                    />
                ))}
            </div>
        </section>
    );
}