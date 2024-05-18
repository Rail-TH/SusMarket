import React, { useState, useEffect } from "react";
import axios from "axios";
import { Reviews } from "../utils/types";
import "../index.scss";
import UserAvatar from "../assets/img/templateUser-avatar.png";

type ReviewProps = {
    review: Reviews;
};

// Компонент для отображения отзыва
export default function Review({ review }: ReviewProps) {
    // Состояние для логина пользователя
    const [userName, setUserName] = useState<string>("");
    // Читаем дату отзыва
    const readableDate = new Date(review.date).toLocaleDateString('ru-RU');

    // useEffect для получения логина пользователя
    useEffect(() => {
        // Запрос к api для получения логина пользователя
        axios.get(`http://127.0.0.1:8000/api/get/user/${review.user_id}`)
          .then(response => {
            const user = response.data.user[0];
            // Устанавливаем логин пользователя
            setUserName(user.login);
          })
          .catch(error => {
            console.error('Ошибка при получении логина пользователя:', error);
          });
      }, [review.user_id]);

    // Возвращаем JSX для отображения отзыва
    return (
        <article className="review-article">
            <div className="review-article__review-container">
                <div className="review-container__user-info">
                    {/* Отображаем аватарку пользователя */}
                    <img className="user-info__user-avatar" src={UserAvatar} alt="Review user avatar" />
                    <h4 className="user-info__user-name">
                        {/* Отображаем логин пользователя */}
                        {userName}
                    </h4>
                </div>
                <div className="review-container__review-info">
                    <div className="review-info__star-rate">
                        {/* Отображаем рейтинг отзыва */}
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
                        {/* Отображаем дату отзыва */}
                        {readableDate}
                    </time>
                </div>
            </div>
            <p className="review-article__text-p">
                {/* Отображаем текст отзыва */}
                {review.commentary}
            </p>
            {/* Отображаем изображение товара, если оно есть */}
            {review.icons && <img className="review-article__product-image" src={review.icons} alt="Review product" />}
        </article>
    );
}

