import React from "react";
import { Link } from "react-router-dom";
import '../ProfileStyle.scss';
import ProfileInfo from "./ProfileInfo";

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
                    
                </div>
            </div>
        </section>
    )
}