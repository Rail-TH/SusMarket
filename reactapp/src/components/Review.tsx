import React, { useState, useEffect } from "react";
import axios from "axios";
import { Reviews } from "../utils/types";
import "../index.scss";
import UserAvatar from "../assets/img/templateUser-avatar.png";

type ReviewProps = {
    review: Reviews;
};

export default function Review({ review }: ReviewProps) {
    const [userName, setUserName] = useState<string>(""); // Состояние для имени пользователя
    const readableDate = new Date(review.date).toLocaleDateString('ru-RU'); // Преобразование даты в читабельную форму

    useEffect(() => { // Получение имени пользователя по его ID
        const baseUrl = window.location.origin; // Получаем текущий домен сайта
        
        axios.get(`${baseUrl}/api/get/user/${review.user_id}`)
            .then(response => {
                const user = response.data.user[0];
                setUserName(user.login);
            })
            .catch(error => {
                console.error('Ошибка при получении логина пользователя:', error);
            });
    }, [review.user_id]);

    return (
        <article className="review-article">
            <div className="review-article__review-container">
                <div className="review-container__user-info">
                    <img className="user-info__user-avatar" src={UserAvatar} alt="Review user avatar" />
                    <h4 className="user-info__user-name">{userName}</h4>
                </div>
                <div className="review-container__review-info">
                    <div className="review-info__star-rate">
                        {[1, 2, 3, 4, 5].map(rate => (
                            <input 
                                key={rate}
                                type="radio" 
                                className="star-rate__star-radio"  
                                value={rate} 
                                aria-label={rate === 1 ? "Плохо" : rate === 2 ? "Удовлетворительно" : rate === 3 ? "Нормально" : rate === 4 ? "Хорошо" : "Отлично"}
                                checked={review.rate === rate}
                                readOnly
                            />
                        ))}
                    </div>
                    <time className="review-info__review-date" dateTime={new Date(review.date).toISOString()}>
                        {readableDate}
                    </time>
                </div>
            </div>
            <p className="review-article__text-p">{review.commentary}</p>
            {review.icons && <img className="review-article__product-image" src={review.icons} alt="Review product" />}
        </article>
    );
}