import React from "react";
import "../index.scss";
import UserAvatar from "../assets/img/review__user-avatar-test.png";
import ProductImage from "../assets/img/review__product-image.webp";

export default function Review() {
    return(
        <article className="review-article">
            <div className="review-article__review-container">
                <div className="review-container__user-info">
                    <img className="user-info__user-avatar" src={UserAvatar} alt="Review user avatar" />
                    <h4 className="user-info__user-name">
                        Святослав Васильев
                    </h4>
                </div>
                <div className="review-container__review-info">=
                    <div className="review-info__star-rate">
                        
                    </div>
                    <time className="review-info__review-date" dateTime="2019-09-09">
                        09.09.2019
                    </time>
                </div>
            </div>
            <p className="review-article__text-p">
                dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia
            </p>
            <img className="review-article__product-image" src={ProductImage} alt="Review product image" />
        </article>
    )
}