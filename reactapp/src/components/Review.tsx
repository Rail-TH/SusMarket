import React from "react";
import { Reviews } from "../utils/types";
import "../index.scss";
import UserAvatar from "../assets/img/templateUser-avatar.png";

type ReviewProps = {
    review: Reviews;
};

export default function Review({ review }: ReviewProps) { //соответствие типов данных в review с указанными типами и свойствами в интерфейсе Reviews
    const readableDate = new Date(review.date).toLocaleDateString('ru-RU'); //приводит дату отзыва из запроса к api в читаемый вид (чч/мм/гг)
    
    return(
        <article className="review-article">
            <div className="review-article__review-container">
                <div className="review-container__user-info">
                    <img className="user-info__user-avatar" src={UserAvatar} alt="Review user avatar" />
                    <h4 className="user-info__user-name">
                        {review.user_id}
                    </h4>
                </div>
                <div className="review-container__review-info">
                    <div className="review-info__star-rate">
                        <input 
                            type="radio" 
                            className="star-rate__star-radio"  
                            value={1} 
                            aria-label="Плохо" 
                            checked={review.rate === 1}
                        />
                        <input 
                            type="radio" 
                            className="star-rate__star-radio"  
                            value={2} 
                            aria-label="Удовлетворительно" 
                            checked={review.rate === 2}
                        />
                        <input 
                            type="radio" 
                            className="star-rate__star-radio"  
                            value={3} 
                            aria-label="Нормально" 
                            checked={review.rate === 3}
                        />
                        <input 
                            type="radio" 
                            className="star-rate__star-radio"  
                            value={4} 
                            aria-label="Хорошо" 
                            checked={review.rate === 4}
                        />
                        <input 
                            type="radio" 
                            className="star-rate__star-radio"  
                            value={5} 
                            aria-label="Отлично" 
                            checked={review.rate === 5}
                        />
                    </div>
                    <time className="review-info__review-date" dateTime="2019-09-09">
                        {readableDate}
                    </time>
                </div>
            </div>
            <p className="review-article__text-p">
                {review.commentary}
            </p>
            <img className="review-article__product-image" src={review.icons} alt="Review product" />
        </article>
    )
}