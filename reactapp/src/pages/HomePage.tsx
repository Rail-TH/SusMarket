import React from "react";
import '../HomeStyle.scss';
import ProductCard from "../components/ProductCard";
import Banner from "../components/AdBanner";
import { Product, Category } from "../utils/types";
import { Link } from "react-router-dom";

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
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <ProductCard
                            title={product.title}
                            icons={product.icons}
                            price={product.price}
                            category_id={product.category_id}
                            id={product.id}
                            description={product.description}
                            tags={product.tags}
                        />
                  </Link>
                ))}
            </div>
        </section>
    );
}