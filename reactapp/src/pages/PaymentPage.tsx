import React, { useState, useCallback } from "react";
import '../PaymentStyle.scss';
import { useLocation } from 'react-router-dom';

function PaymentPage() {
    const [ccNumber, setCcNumber] = useState(""); // Состояние для номера карты
    const [expiryDate, setExpiryDate] = useState(""); // Состояние для даты истечения срока действия карты
    const [cvv, setCvv] = useState(""); // Состояние для кода карты
    const location = useLocation(); // Получение параметров из URL
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get('price'); // Получение стоимости из URL
    
    const formatAndSetCcNumber = useCallback((e: React.ChangeEvent<HTMLInputElement>) => { // Обработчик изменения номера карты
        const inputVal = e.target.value.replace(/\D/g, ""); // Удаление всех символов, кроме цифр

        const formattedNumber = inputVal.match(/.{1,4}/g)?.join(" ") || ""; // Разделяем введенное значение на группы по 4 символа и добавляем пробелы между ними
        setCcNumber(formattedNumber); // Устанавливаем введенное значение в состояние
    }, []);

    const handleChangeExpiryDate = useCallback((event: React.ChangeEvent<HTMLInputElement>) => { // Обработчик изменения даты истечения срока действия карты
        const inputVal = event.target.value.replace(/\D/g, ""); // Удаление всех символов, кроме цифр
        setExpiryDate(inputVal.slice(0, 4)); // Ограничиваем значение до 4 символов
    }, []);

    const handleChangeCvv = useCallback((event: React.ChangeEvent<HTMLInputElement>) => { // Обработчик изменения кода карты
        const inputVal = event.target.value.replace(/\D/g, ""); // Удаление всех символов, кроме цифр
        setCvv(inputVal.slice(0, 3)); // Ограничиваем значение до 3 символов
    }, []);
    
    return(
        <section className="payment-page">
            <h2 className="payment-page__price">{price} ₽</h2>
            <div className="payment-page__payment-card">
                <h3 className="payment-card__heading">Оплата картой</h3>
                <input 
                    className="payment-card__input" 
                    type="text" 
                    placeholder="Номер" 
                    value={ccNumber} 
                    onChange={formatAndSetCcNumber} 
                    maxLength={19} // Максимальная длина ввода (16 цифр + 3 пробела)
                />
                <div className="payment-card__inputs-group">
                    <input 
                        className="payment-card__input" 
                        type="text" 
                        placeholder="ММГГ" 
                        value={expiryDate} 
                        onChange={handleChangeExpiryDate} 
                        maxLength={4} // Максимальная длина ввода
                    />
                    <input 
                        className="payment-card__input" 
                        type="text" 
                        placeholder="CVC/CVV" 
                        value={cvv} 
                        onChange={handleChangeCvv} 
                        maxLength={3} // Максимальная длина ввода
                    />
                </div>
            </div>
            <a href="scam" className="payment-page__pay-link">Оплатить</a>
        </section>
    )
}

export default PaymentPage;