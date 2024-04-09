import React, { useState } from 'react';
import '../ProductStyle.scss';
import ImageAttachIcon from "../assets/icons/review-form__add-image-icon.svg";
import { motion } from 'framer-motion';

interface ReviewState {
    text: string;
    rating: number;
    image: File | null;
}

export default function ReviewForm() {
    const [review, setReview] = useState<ReviewState>({ text: '', rating: 1, image: null });

    function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setReview({ ...review, text: event.target.value });
    }

    function handleRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
        setReview({ ...review, rating: Number(event.target.value) });
    }

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setReview({ ...review, image: event.target.files[0] });
        }
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log(review);
    }
    
    return(
        <form className='product-page__review-form' onSubmit={handleSubmit}>
            <h5 className='review-form__heading'>
                Оставить отзыв
            </h5>
            <div className="review-form__stars-container">
                {[...Array(5)].map((_, index) => (
                    <input 
                        key={index}
                        type="radio" 
                        className="review-form__star-radio" 
                        name="rating" 
                        value={index + 1} 
                        aria-label={`Рейтинг ${index + 1}`} 
                        checked={review.rating === index + 1} 
                        onChange={handleRatingChange}
                    />
                ))}
            </div>
            <textarea 
                className='review-form__textarea' 
                cols={30} 
                rows={5} 
                placeholder='Комментарий' 
                value={review.text} 
                onChange={handleTextChange}
            />
            <label htmlFor="review-image" className='review-form__image-attach'>
                <img src={ImageAttachIcon} alt="Прикрепить изображение"/>
            </label>
            <input 
                className='review-form__image-input' 
                type="file" 
                name="review image" 
                id="review-image" 
                accept='.png, .jpg, .jpeg' 
                onChange={handleImageChange}
            />
            <motion.button 
                className='review-form__send-button' 
                type='submit'
                whileTap={{scale: 0.98}}
                transition={{duration: 0.2, type: "spring"}}
            >
                Отправить отзыв
            </motion.button>
        </form>
    )
}