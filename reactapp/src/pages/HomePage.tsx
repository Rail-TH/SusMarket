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
        <section className="home-section">
            <Banner />
            <div className="products-div">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}