import React, { useState } from "react";

type ButtonState = 1 | 2 | null;

interface PopupMapProps {
    togglePopupMap: () => void;
}

export default function PopupMap({ togglePopupMap }: PopupMapProps): JSX.Element {
    const [selectedButton, setSelectedButton] = useState<ButtonState>(null);

    const handleButtonClick = (buttonId: ButtonState) => {
        setSelectedButton(buttonId);
    };
    
    return(
        <>
            <div className="background-blackout" onClick={togglePopupMap}></div>
            <div className="popup-map">
                <div className="popup-map__menu-div">
                    <div className="menu-div__container-div">
                        <div className="menu-div__delivery-div">
                            <button className={selectedButton === 1 ? 'delivery-div__delivery-button delivery-div__delivery-button_selected' : 'delivery-div__delivery-button'} onClick={() => handleButtonClick(1)}>
                                Самовывоз
                            </button>
                            <button className={selectedButton === 2 ? 'delivery-div__delivery-button delivery-div__delivery-button_selected' : 'delivery-div__delivery-button'} onClick={() => handleButtonClick(2)}>
                                Курьером
                            </button>
                        </div>
                        <input type="search" name="address-search" id="address-search" placeholder="Искать на карте" className="menu-div__search-input"/>
                    </div>
                    <button className="menu-div__select-button">
                        Заберу здесь
                    </button>
                </div>
                <div className="popup-map__map-div">
                    <a href="https://yandex.ru/maps/65/novosibirsk/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"0px"}}>Новосибирск</a>
                    <a href="https://yandex.ru/maps/65/novosibirsk/house/ulitsa_titova_14/bEsYfg9iSkEGQFtufXV5cn9lYQ==/?ll=82.882443%2C54.983268&utm_medium=mapframe&utm_source=maps&z=18.59" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"14px"}}>Улица Титова, 14 — Яндекс Карты</a>
                    <iframe title="map" src="https://yandex.ru/map-widget/v1/?ll=82.882443%2C54.983268&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzA5NDgyMhJB0KDQvtGB0YHQuNGPLCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDRg9C70LjRhtCwINCi0LjRgtC-0LLQsCwgMTQiCg3Dw6VCFffuW0I%2C&z=18.59" width="100%" height="100%" style={{position:"relative"}} className="popup-map__map-iframe"></iframe>
                </div>
            </div>
        </>
    )
}