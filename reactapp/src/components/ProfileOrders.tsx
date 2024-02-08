import React from "react";
import { Link } from "react-router-dom";
import '../ProfileStyle.scss';
import ProfileInfo from "./ProfileInfo";

export default function ProfileOrders() {
    return(
        <section className="orders-section">
            <nav className="profile-section__nav">
                <Link to="/" className="profile-link active">
                    Мои заказы
                </Link>
                <Link to="purchases" className="profile-link">
                    Мои покупки
                </Link>
            </nav>
            <div className="orders-container">
                <ProfileInfo />
                <div className="orders-div">
                    <article className="order-article">
                        <div className="order-article__img"></div>
                        <div className="order-article__info-div">
                            <span className="order-article__status-span">В пути</span>
                            <span className="order-article__info-span">Доставка в пункт выдачи</span>
                            <span className="order-article__date-span">Ожидаем 9 декабря</span>
                        </div>
                    </article>
                    <article className="order-article">
                        <div className="order-article__img"></div>
                        <div className="order-article__info-div">
                            <span className="order-article__status-span">В пути</span>
                            <span className="order-article__info-span">Доставка в пункт выдачи</span>
                            <span className="order-article__date-span">Ожидаем 9 декабря</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}