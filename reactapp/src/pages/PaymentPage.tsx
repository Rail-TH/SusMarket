import React, { useState } from "react";
import '../PaymentStyle.scss';

export default function PaymentPage() {
    const [ccNumber, setCcNumber] = useState(""); //состояние номера кредитной карты
    const [valueDate, setValueDate] = useState<number | ''>(''); //состояние даты истечения срока карты
    const [valueCode, setValueCode] = useState<number | ''>(''); //состояние кода безопасности карты

    const formatAndSetCcNumber = (e: React.ChangeEvent<HTMLInputElement>) => { //в ccNumber максимум 16 цифр, разбивка пробелами по 4
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

    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => { //valueDate не более 4-х цифр
        const inputValue = event.target.value;
        if (inputValue.length <= 4) {
            setValueDate(inputValue === '' ? '' : Number(inputValue));
        }
    };

    const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => { //valueCode не более 3-х цифр
        const inputValue = event.target.value;
        if (inputValue.length <= 3) {
            setValueCode(inputValue === '' ? '' : Number(inputValue));
        }
    };
    
    return(
        <section className="payment-page">
            <h2 className="payment-page__price">
                 ₽
            </h2>
            <div className="payment-page__payment-card">
                <h3 className="payment-card__heading">
                    Оплата картой
                </h3>
                <input className="payment-card__input" type="text" name="" id="" placeholder="Номер" value={ccNumber} onChange={formatAndSetCcNumber}/>
                <div className="payment-card__inputs-group">
                    <input className="payment-card__input" type="number" name="" id="" placeholder="ММ/ГГ" value={valueDate} onChange={handleChangeDate}/>
                    <input className="payment-card__input" type="number" name="" id="" placeholder="CVC/CVV" value={valueCode} onChange={handleChangeCode}/>
                </div>
            </div>
            <a href="scam" className="payment-page__pay-link">
                Оплатить
            </a>
        </section>
    )
}