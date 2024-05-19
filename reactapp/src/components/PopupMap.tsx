import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type ButtonState = 1 | 2 | null;

interface PopupMapProps { // Пропсы, которые принимает компонент PopupMap
  togglePopupMap: () => void; // Функция для закрытия всплывающего окна
}

// Компонент, отображающий всплывающее окно с картой
export default function PopupMap({ togglePopupMap }: PopupMapProps) {
  const [selectedButton, setSelectedButton] = useState<ButtonState>(null); // Состояние для отслеживания выбранного кнопки

  const handleButtonClick = (buttonId: ButtonState) => { // Обработчик клика на кнопку
    setSelectedButton(buttonId);
  };

  const handleClose = () => { // Обработчик закрытия всплывающего окна
    document.body.classList.remove('no-scroll'); // Удаление класса "no-scroll" с тела документа
    togglePopupMap(); // Вызов функции для закрытия всплывающего окна
  };

  useEffect(() => { // Эффект для добавления класса "no-scroll" с тела документа при монтировании компонента
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <div className="background-blackout" onClick={handleClose}></div>
      <div className="popup-map">
        <div className="popup-map__menu-div">
          <div className="menu-div__container-div">
            <div className="menu-div__delivery-div">
              <motion.button
                className={`delivery-div__delivery-button ${selectedButton === 1 ? 'delivery-div__delivery-button_selected' : ''}`}
                onClick={() => handleButtonClick(1)}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.02, type: 'spring' }}
              >
                Самовывоз
              </motion.button>
              <motion.button
                className={`delivery-div__delivery-button ${selectedButton === 2 ? 'delivery-div__delivery-button_selected' : ''}`}
                onClick={() => handleButtonClick(2)}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.02, type: 'spring' }}
              >
                Курьером
              </motion.button>
            </div>
            <input type="search" name="address-search" id="address-search" placeholder="Искать на карте" className="menu-div__search-input" />
          </div>
          <motion.button
            className="menu-div__select-button"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.01, type: 'spring' }}
          >
            Заберу здесь
          </motion.button>
        </div>
        <div className="popup-map__map-div">
          <a href="https://yandex.ru/maps/65/novosibirsk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Новосибирск</a>
          <a href="https://yandex.ru/maps/65/novosibirsk/house/ulitsa_titova_14/bEsYfg9iSkEGQFtufXV5cn9lYQ==/?ll=82.882443%2C54.983268&utm_medium=mapframe&utm_source=maps&z=18.59" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Улица Титова, 14 — Яндекс Карты</a>
          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/?ll=82.882443%2C54.983268&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzA5NDgyMhJB0KDQvtGB0YHQuNGPLCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDRg9C70LjRhtCwINCi0LjRgtC-0LLQsCwgMTQiCg3Dw6VCFffuW0I%2C&z=18.59"
            width="100%"
            height="100%"
            style={{ position: "relative" }}
            className="popup-map__map-iframe"
          ></iframe>
        </div>
      </div>
    </>
  );
}