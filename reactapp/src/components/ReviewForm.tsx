import React, { useState, useEffect } from 'react';
import '../ProductStyle.scss';
import ImageAttachIcon from "../assets/icons/review-form__add-image-icon.svg";
import { motion } from 'framer-motion';
import axios from 'axios';
import Cookies from 'js-cookie';

interface ReviewState {
    text: string;
    rating: number;
    image?: string | ArrayBuffer | null;
}

export default function ReviewForm({ productId }: { productId: string }) {
    const [review, setReview] = useState<ReviewState>({ text: '', rating: 1 }); // Состояние для отзыва
    const [userId, setUserId] = useState<string | null>(null); // Состояние для ID пользователя
    const [imageName, setImageName] = useState<string | null>(null); // Состояние для имени изображения

    useEffect(() => { // Получение ID пользователя из cookie при инициализации компонента
        const userIdFromCookie = Cookies.get('user_id');
        if (userIdFromCookie) {
            setUserId(userIdFromCookie);
        }
    }, []);

    function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) { // Обработчик изменения текста отзыва
        setReview({ ...review, text: event.target.value });
    }

    function handleRatingChange(event: React.ChangeEvent<HTMLInputElement>) { // Обработчик изменения оценки отзыва
        setReview({ ...review, rating: Number(event.target.value) });
    }

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) { // Обработчик изменения изображения
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImageName(file.name);

            const reader = new FileReader();
            reader.onload = () => {
                setReview({ ...review, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    async function handleSubmit(event: React.FormEvent) { // Обработчик отправки формы
        event.preventDefault();
        if (!userId) {
            console.error('ID пользователя не найден!');
            return;
        }
        try {
            const params = new URLSearchParams();
            params.append('commentary', review.text);
            params.append('rate', String(review.rating));
            params.append('product', productId);
            params.append('user_id', userId);
            if (review.image) {
                params.append('icon', review.image as string);
            }

            await axios.post('http://127.0.0.1:8000/api/post/review', params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            alert("Отзыв успешно отправлен!");
        } catch (error) {
            console.error('Ошибка при отправке отзыва:', error);
        }
    }

    return (
        <form className='product-page__review-form' onSubmit={handleSubmit}>
            <h5 className='review-form__heading'>Оставить отзыв</h5>
            <div className="review-form__stars-container">
                {/* Создание радиокнопок для выбора оценки */}
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
            <div className='review-form__image-container'>
                <label htmlFor="review-image" className='review-form__image-attach'>
                    <img src={ImageAttachIcon} alt="Прикрепить изображение" />
                </label>
                <input
                    className='review-form__image-input'
                    type="file"
                    name="review image"
                    id="review-image"
                    accept='.png, .jpg, .jpeg'
                    onChange={handleImageChange}
                />
                {imageName && <div className="review-form__image-name">{imageName}</div>}
            </div>
            <motion.button
                className='review-form__send-button'
                type='submit'
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, type: "spring" }}
            >
                Отправить отзыв
            </motion.button>
        </form>
    )
}