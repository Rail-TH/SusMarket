import React from "react";
import { Link } from "react-router-dom";
import '../ProfileStyle.scss';
import ProfileInfo from "./ProfileInfo";
import ProductCard from "./ProductCard";
import ProductImage from "../assets/img/product-image-3.webp";

export default function ProfilePurchases() {
    return(
        <section className="purchases-section">
            <nav className="profile-page__nav">
                <Link to="/profile" className="profile-link">
                    Мои заказы
                </Link>
                <Link to="purchases" className="profile-link active">
                    Мои покупки
                </Link>
            </nav>
            <div className="purchases-container">
                <ProfileInfo />
                <div className="purchases-div">
                    {/* <ProductCard ProductImg={ProductImage} ProductName="Абеме" Price={150}/>
                    <ProductCard ProductImg={ProductImage} ProductName="Абеме" Price={1234523453}/>
                    <ProductCard ProductImg={ProductImage} ProductName="Абеме" Price={10}/> */}
                </div>
            </div>
        </section>
    )
}