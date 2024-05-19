import React, { useState } from "react";
import '../PaymentStyle.scss';
import { useLocation } from 'react-router-dom';

export default function PaymentPage() {
    const [ccNumber, setCcNumber] = useState(""); // Состояние для номера карты
    const [valueDate, setValueDate] = useState<number | ''>(''); // Состояние для даты истечения срока действия карты
    const [valueCode, setValueCode] = useState<number | ''>(''); // Состояние для кода карты
    const location = useLocation(); // Получение параметров из URL
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get('price'); // Получение стоимости из URL
    
    const formatAndSetCcNumber = (e: React.ChangeEvent<HTMLInputElement>) => { // Обработчик изменения номера карты
        const inputVal = e.target.value.replace(/ /g, ""); // Удаление пробелов из введенного значения
        let inputNumbersOnly = inputVal.replace(/\D/g, ""); // Удаление всех символов, кроме цифр

        if (inputNumbersOnly.length > 16) { // Если введенное значение превышает 16 символов
            inputNumbersOnly = inputNumbersOnly.substr(0, 16); // Усекаем его до 16 символов
        }

        const splits = inputNumbersOnly.match(/.{1,4}/g); // Разделяем введенное значение на группы по 4 символа

        let spacedNumber = ""; // Строка для хранения введенного значения с разделителями
        if (splits) { // Если разделение прошло успешно
            spacedNumber = splits.join(" "); // Добавляем пробелы между группами по 4 символа
        }

        setCcNumber(spacedNumber); // Устанавливаем введенное значение в состояние
    };

    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => { // Обработчик изменения даты истечения срока действия карты
        const inputValue = event.target.value; // Получаем введенное значение
        if (inputValue.length <= 4) { // Если введенное значение содержит не больше 4 символов
            setValueDate(inputValue === '' ? '' : Number(inputValue)); // Устанавливаем значение в состояние
        }
    };

    const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => { // Обработчик изменения кода карты
        const inputValue = event.target.value; // Получаем введенное значение
        if (inputValue.length <= 3) { // Если введенное значение содержит не больше 3 символов
            setValueCode(inputValue === '' ? '' : Number(inputValue)); // Устанавливаем значение в состояние
        }
    };
    
    return(
        <section className="payment-page">
            <h2 className="payment-page__price">{price} ₽ </h2>
            <div className="payment-page__payment-card">
                <h3 className="payment-card__heading"> Оплата картой </h3>
                <input className="payment-card__input" type="text" placeholder="Номер" value={ccNumber} onChange={formatAndSetCcNumber}/>
                <div className="payment-card__inputs-group">
                    <input className="payment-card__input" type="number" placeholder="ММ/ГГ" value={valueDate} onChange={handleChangeDate}/>
                    <input className="payment-card__input" type="number" placeholder="CVC/CVV" value={valueCode} onChange={handleChangeCode}/>
                </div>
            </div>
            <a href="scam" className="payment-page__pay-link"> Оплатить </a>
        </section>
    )
}