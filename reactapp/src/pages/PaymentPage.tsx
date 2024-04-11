import React, { useState } from "react";
import '../PaymentStyle.scss';

export default function PaymentPage() {
    let price = 150

    const [ccNumber, setCcNumber] = useState("");
    const [valueDate, setValueDate] = useState<number | ''>('');
    const [valueCode, setValueCode] = useState<number | ''>('');

    const formatAndSetCcNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = e.target.value.replace(/ /g, ""); //remove all the empty spaces in the input
        let inputNumbersOnly = inputVal.replace(/\D/g, ""); // Get only digits
    
        if (inputNumbersOnly.length > 16) {
            //If entered value has a length greater than 16 then take only the first 16 digits
            inputNumbersOnly = inputNumbersOnly.substr(0, 16);
        }
    
       // Get nd array of 4 digits per an element EX: ["4242", "4242", ...]
        const splits = inputNumbersOnly.match(/.{1,4}/g);
    
        let spacedNumber = "";
        if (splits) {
            spacedNumber = splits.join(" "); // Join all the splits with an empty space
        }
    
        setCcNumber(spacedNumber); // Set the new CC number
    };

    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 4) {
            setValueDate(inputValue === '' ? '' : Number(inputValue));
        }
    };

    const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 3) {
            setValueCode(inputValue === '' ? '' : Number(inputValue));
        }
    };
    
    return(
        <section className="payment-page">
            <h2 className="payment-page__price">
                {price} ₽
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