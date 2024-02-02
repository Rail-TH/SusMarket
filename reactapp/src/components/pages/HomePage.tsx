import React from "react";
import ProductCard from "../blocks/ProductCard";

export default function HomePage(Placeholder:any) {
    return(
        <section className="home-section">
            <ProductCard ProductName="Абеме" ProductImg={Placeholder} Price={150} />
        </section>
    )
}