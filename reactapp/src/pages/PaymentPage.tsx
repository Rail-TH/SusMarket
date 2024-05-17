import React, { useState } from "react";
import '../PaymentStyle.scss';
import { useLocation } from 'react-router-dom';

// Компонент страницы оплаты
export default function PaymentPage() {
    // Состояние номера кредитной карты
    const [ccNumber, setCcNumber] = useState(""); 
    // Состояние даты истечения срока карты
    const [valueDate, setValueDate] = useState<number | ''>(''); 
    // Состояние кода безопасности карты
    const [valueCode, setValueCode] = useState<number | ''>(''); 
    // Получение параметров из URL
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    // Получение цены из параметров URL
    const price = queryParams.get('price');
    
    // Функция для форматирования и установки номера кредитной карты
    const formatAndSetCcNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = e.target.value.replace(/ /g, "");
        let inputNumbersOnly = inputVal.replace(/\D/g, "");

        if (inputNumbersOnly.length > 16) {
            inputNumbersOnly = inputNumbersOnly.substr(0, 16);
        }

        const splits = inputNumbersOnly.match(/.{1,4}/g);

        let spacedNumber = "";
        if (splits) {
            spacedNumber = splits.join(" ");
        }

        setCcNumber(spacedNumber);
    };

    // Функция для обработки изменения даты истечения срока карты
    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 4) {
            setValueDate(inputValue === '' ? '' : Number(inputValue));
        }
    };

    // Функция для обработки изменения кода безопасности карты
    const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 3) {
            setValueCode(inputValue === '' ? '' : Number(inputValue));
        }
    };
    
    return(
        <section className="payment-page">
            {/* Отображение цены */}
            <h2 className="payment-page__price">{price} ₽ </h2>
            <div className="payment-page__payment-card">
                <h3 className="payment-card__heading"> Оплата картой </h3>
                {/* Ввод номера кредитной карты */}
                <input className="payment-card__input" type="text" placeholder="Номер" value={ccNumber} onChange={formatAndSetCcNumber}/>
                <div className="payment-card__inputs-group">
                    {/* Ввод даты истечения срока карты */}
                    <input className="payment-card__input" type="number" placeholder="ММ/ГГ" value={valueDate} onChange={handleChangeDate}/>
                    {/* Ввод кода безопасности карты */}
                    <input className="payment-card__input" type="number" placeholder="CVC/CVV" value={valueCode} onChange={handleChangeCode}/>
                </div>
            </div>
            {/* Кнопка для оплаты */}
            <a href="scam" className="payment-page__pay-link"> Оплатить </a>
        </section>
    )
}