import React from "react";
import '../HomeStyle.scss'
import ProductCard from "../components/ProductCard";
import Banner from "../components/AddBanner";
import Image1 from "../assets/img/product-image-1.webp";
import Image2 from "../assets/img/product-image-2.webp";
import Image3 from "../assets/img/product-image-3.webp";
import Image4 from "../assets/img/product-image-4.webp";
import Image5 from "../assets/img/product-image-5.webp";
import Image6 from "../assets/img/product-image-6.webp";
import Image7 from "../assets/img/product-image-7.webp";
import Image8 from "../assets/img/product-image-8.webp";
import Image9 from "../assets/img/product-image-9.webp";
import Image10 from "../assets/img/product-image-10.webp";

export default function HomePage() {
    return(
        <section className="home-section">
            <Banner />
            <div className="products-div">
                <ProductCard ProductName="Шоколадка Mr. Beast" ProductImg={Image1} Price={2000} />
                <ProductCard ProductName="Салат" ProductImg={Image2} Price={200} />
                <ProductCard ProductName="Футболка 'Инфантил'" ProductImg={Image3} Price={1500} />
                <ProductCard ProductName="Мороженое" ProductImg={Image4} Price={150} />
                <ProductCard ProductName="Фигурка" ProductImg={Image5} Price={1799} />
                <ProductCard ProductName="Трансформер" ProductImg={Image6} Price={19999} />
                <ProductCard ProductName="Старая игрушка Баз-Лайтер" ProductImg={Image7} Price={2564235634563456} />
                <ProductCard ProductName="Одёжка" ProductImg={Image8} Price={756} />
                <ProductCard ProductName="Книга про ботанику" ProductImg={Image9} Price={2345} />
                <ProductCard ProductName="Книга белая" ProductImg={Image10} Price={150} />
            </div>
        </section>
    )
}