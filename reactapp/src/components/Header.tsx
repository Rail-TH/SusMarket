import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Logotype from '../assets/img/amongasik.png';
import CatalogMenu from './CatalogMenu';
import LoginMenu from './LoginMenu';
import { Category } from '../utils/types';
import Cookies from 'js-cookie';

interface HeaderProps { // Интерфейс для пропсов компонента Header
    togglePopupMap: () => void; // Функция для переключения видимости карты
    onSelectCategory: (category: Category | 'all') => void; // Функция для выбора категории
    onSearchChange: (query: string) => void; // Функция для изменения строки поиска
}

const MotionLink = motion(Link); // Вынесение компонента в отдельную переменную для удобства использования

export default function Header({ togglePopupMap, onSelectCategory, onSearchChange }: HeaderProps) {
    const [isCatalogMenuVisible, setIsCatalogMenuVisible] = useState(false); // Состояние для хранения видимости карточного меню
    const [isLoginMenuVisible, setIsLoginMenuVisible] = useState(false); // Состояние для хранения видимости меню входа
    const navigate = useNavigate(); // Функция для навигации
  
    const toggleCatalogMenu = () => setIsCatalogMenuVisible(prevState => !prevState); // Функция для переключения видимости карточного меню
    const toggleLoginMenu = () => setIsLoginMenuVisible(prevState => !prevState); // Функция для переключения видимости меню входа
  
    const handleProfileClick = () => { // Функция для перехода на страницу профиля при нажатии на кнопку
      const userCookie = Cookies.get('user'); // Проверка на наличие куки с логином
      userCookie ? navigate('/profile') : toggleLoginMenu(); // Переход на страницу профиля если куки есть, иначе переключение видимости меню входа
    };
  
    const resetCategoryFilter = () => onSelectCategory('all'); // Функция для сброса фильтрации категорий
  
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => { // Функция для обработки нажатия клавиши Enter в поле ввода
      if (event.key === 'Enter') { // Предотвращение отправки формы при нажатии Enter
        event.preventDefault();
      }
    };
    
    return(
        <header className="header">
            <nav className="header__main-nav">
                <h1 className="header__title-h1" onClick={resetCategoryFilter}>
                    <Link to="/" className="title-h1__a">
                        <img className="header__logo-img" src={Logotype} alt="Dead amongus" />
                        <span>SuSMarket</span>
                    </Link>
                </h1>
                <motion.button 
                    className="catalog-button"
                    whileTap={{scale: 0.95}}
                    transition={{duration: 0.2, type: "spring"}}
                    whileHover={{backgroundColor: "#EB5E28", color: "white"}}
                    onClick={toggleCatalogMenu}
                >
                    Каталог
                </motion.button>
                <form action="search" className="search-form">
                    <div className="search-form__field">
                        <input 
                            type="text"
                            onChange={(e) => onSearchChange(e.target.value)}
                            name="search"
                            className="search-form__input" 
                            placeholder="Я ищу..."
                            onKeyDown={handleKeyDown}
                        />
                        {/* Код для svg */}
                        <svg width="33.000000" height="33.000000" viewBox="0 0 33 33" fill="none">
                            <defs>
                                <clipPath id="clip3_8">
                                    <rect id="search_FILL0_wght400_GRAD0_opsz24 1" width="33.000000" height="33.000000" fill="white" fillOpacity="0"/>
                                </clipPath>
                            </defs>
                            <rect id="search_FILL0_wght400_GRAD0_opsz24 1" width="33.000000" height="33.000000" fill="#FFFFFF" fillOpacity="0"/>
                            <g clipPath="url(#clip3_8)">
                                <path id="Vector" d="M13.0625 22C10.5646 22 8.45056 21.1349 6.72034 19.4047C4.99011 17.6744 4.125 15.5604 4.125 13.0625C4.125 10.5646 4.99011 8.45056 6.72034 6.72034C8.45056 4.99011 10.5646 4.125 13.0625 4.125C15.5604 4.125 17.6744 4.99011 19.4047 6.72034C21.1349 8.45056 22 10.5646 22 13.0625C22 14.0708 21.8396 15.0219 21.5188 15.9156C21.1979 16.8093 20.7625 17.6 20.2125 18.2875L27.9125 25.9875C28.1646 26.2396 28.2906 26.5604 28.2906 26.95C28.2906 27.3396 28.1646 27.6604 27.9125 27.9125C27.6604 28.1646 27.3396 28.2906 26.95 28.2906C26.5604 28.2906 26.2396 28.1646 25.9875 27.9125L18.2875 20.2125C17.6 20.7625 16.8093 21.1979 15.9156 21.5188C15.0219 21.8396 14.0708 22 13.0625 22ZM13.0625 19.25C14.7812 19.25 16.2422 18.6484 17.4453 17.4453C18.6484 16.2422 19.25 14.7812 19.25 13.0625C19.25 11.3438 18.6484 9.88281 17.4453 8.67969C16.2422 7.47656 14.7812 6.875 13.0625 6.875C11.3438 6.875 9.88281 7.47656 8.67969 8.67969C7.47656 9.88281 6.875 11.3438 6.875 13.0625C6.875 14.7812 7.47656 16.2422 8.67969 17.4453C9.88281 18.6484 11.3438 19.25 13.0625 19.25Z" fill="#CCC5B9" fillOpacity="1.000000" fillRule="nonzero"/>
                            </g>
                        </svg>
                        {/* Код для svg */}
                    </div>
                </form>
                <motion.button 
                    className="header__profile-a"
                    whileTap={{scale: 0.9}}
                    transition={{duration: 0.2, type: "spring"}}
                    onClick={handleProfileClick}
                >
                    {/* Код для svg */}
                    <motion.svg width="48.000000" height="48.000000" viewBox="0 0 48 48" fill="none"
                        whileTap={{scale: 0.9}}
                        transition={{duration: 0.2, type: "spring"}}
                    >
                        <defs>
                            <clipPath id="clip3_40">
                                <rect id="person_FILL0_wght400_GRAD0_opsz48 1" width="48.000000" height="48.000000" fill="white" fillOpacity="0"/>
                            </clipPath>
                        </defs>
                        <rect id="person_FILL0_wght400_GRAD0_opsz48 1" width="48.000000" height="48.000000" fill="#FFFFFF" fillOpacity="0"/>
                        <g clipPath="url(#clip3_40)">
                            <path id="Vector" d="M24 23.95C21.8 23.95 20 23.25 18.6 21.85C17.2 20.45 16.5 18.6499 16.5 16.45C16.5 14.25 17.2 12.45 18.6 11.0499C20 9.6499 21.8 8.94995 24 8.94995C26.2 8.94995 28 9.6499 29.4 11.0499C30.8 12.45 31.5 14.25 31.5 16.45C31.5 18.6499 30.8 20.45 29.4 21.85C28 23.25 26.2 23.95 24 23.95ZM8 37L8 35.2999C8 34.0333 8.31665 32.95 8.94995 32.0499C9.58337 31.1499 10.4 30.4667 11.4 30C13.6333 29 15.775 28.25 17.825 27.75C19.875 27.25 21.9333 27 24 27C26.0667 27 28.1167 27.2583 30.15 27.7749C32.1833 28.2916 34.3153 29.0365 36.546 30.0096C37.5894 30.4805 38.4259 31.1633 39.0555 32.058C39.6852 32.9526 40 34.0333 40 35.2999L40 37C40 37.825 39.7063 38.5312 39.1188 39.1187C38.5312 39.7062 37.825 40 37 40L11 40C10.175 40 9.46875 39.7062 8.88123 39.1187C8.2937 38.5312 8 37.825 8 37ZM11 37L37 37L37 35.2999C37 34.7666 36.8417 34.2583 36.525 33.7749C36.2084 33.2916 35.8167 32.9332 35.35 32.7C33.2167 31.6666 31.2667 30.9583 29.5 30.575C27.7333 30.1917 25.9 30 24 30C22.1 30 20.25 30.1917 18.45 30.575C16.65 30.9583 14.7 31.6666 12.6 32.7C12.1333 32.9332 11.75 33.2916 11.45 33.7749C11.15 34.2583 11 34.7666 11 35.2999L11 37ZM24 20.95C25.3 20.95 26.375 20.5249 27.225 19.6749C28.075 18.825 28.5 17.75 28.5 16.45C28.5 15.1499 28.075 14.075 27.225 13.225C26.375 12.375 25.3 11.95 24 11.95C22.7 11.95 21.625 12.375 20.775 13.225C19.925 14.075 19.5 15.1499 19.5 16.45C19.5 17.75 19.925 18.825 20.775 19.6749C21.625 20.5249 22.7 20.95 24 20.95Z" fill="#CCC5B9" fillOpacity="1.000000" fillRule="nonzero"/>
                        </g>
                    </motion.svg>
                    {/* Код для svg */}
                </motion.button>
                <motion.button
                    className="header__popupmap-button"
                    whileTap={{scale: 0.9}}
                    transition={{duration: 0.2, type: "spring"}}
                    onClick={togglePopupMap}
                >
                    {/* Код для svg */}
                    <svg width="48.000000" height="48.000000" viewBox="0 0 48 48" fill="none">
                        <defs>
                            <clipPath id="clip3_51">
                                <rect id="location_on_FILL0_wght400_GRAD0_opsz48 1" width="48.000000" height="48.000000" fill="white" fillOpacity="0"/>
                            </clipPath>
                        </defs>
                        <rect id="location_on_FILL0_wght400_GRAD0_opsz48 1" width="48.000000" height="48.000000" fill="#FFFFFF" fillOpacity="0"/>
                        <g clipPath="url(#clip3_51)">
                            <path id="Vector" d="M24 40.05C28.4333 36.0167 31.7084 32.3583 33.825 29.075C35.9417 25.7916 37 22.9 37 20.4C37 16.4736 35.7451 13.2588 33.2354 10.7552C30.7257 8.25171 27.6472 7 24 7C20.3528 7 17.2743 8.25171 14.7646 10.7552C12.2549 13.2588 11 16.4736 11 20.4C11 22.9 12.0834 25.7916 14.25 29.075C16.4166 32.3583 19.6666 36.0167 24 40.05ZM23.9875 43C23.6292 43 23.275 42.9417 22.925 42.825C22.575 42.7084 22.2667 42.5167 22 42.25C20.6 40.9833 19.0834 39.525 17.45 37.875C15.8167 36.225 14.3 34.45 12.9 32.55C11.5 30.65 10.3334 28.6666 9.40002 26.6C8.46667 24.5333 8 22.4667 8 20.4C8 15.4 9.60828 11.4166 12.825 8.44995C16.0416 5.48328 19.7667 4 24 4C28.2333 4 31.9584 5.48328 35.175 8.44995C38.3917 11.4166 40 15.4 40 20.4C40 22.4667 39.5333 24.5333 38.6 26.6C37.6666 28.6666 36.5 30.65 35.1 32.55C33.7 34.45 32.1833 36.225 30.55 37.875C28.9166 39.525 27.4 40.9833 26 42.25C25.7333 42.5167 25.4208 42.7084 25.0625 42.825C24.7042 42.9417 24.3458 43 23.9875 43ZM24.0044 23.5C24.9681 23.5 25.7916 23.1569 26.475 22.4706C27.1583 21.7843 27.5 20.9592 27.5 19.9956C27.5 19.0319 27.1569 18.2084 26.4706 17.525C25.7843 16.8417 24.9592 16.5 23.9956 16.5C23.0319 16.5 22.2084 16.8431 21.525 17.5294C20.8417 18.2157 20.5 19.0408 20.5 20.0044C20.5 20.9681 20.8431 21.7916 21.5294 22.475C22.2157 23.1583 23.0408 23.5 24.0044 23.5Z" fill="#CCC5B9" fillOpacity="1.000000" fillRule="nonzero"/>
                        </g>
                    </svg>
                    {/* Код для svg */}
                </motion.button>
                <MotionLink
                    to="/info" 
                    className="header__info-a"
                    whileTap={{scale: 0.9}}
                    transition={{duration: 0.2, type: "spring"}}
                >
                    {/* Код для svg */}
                        <svg width="48.000000" height="48.000000" viewBox="0 0 48 48" fill="none">
                            <defs>
                                <clipPath id="clip6_70">
                                    <rect id="info_FILL0_wght400_GRAD0_opsz48 1" width="48.000000" height="48.000000" fill="white" fillOpacity="0"/>
                                </clipPath>
                            </defs>
                            <rect id="info_FILL0_wght400_GRAD0_opsz48 1" width="48.000000" height="48.000000" fill="#FFFFFF" fillOpacity="0"/>
                            <g clipPath="url(#clip6_70)">
                                <path id="Vector" d="M24.1587 34C24.5863 34 24.9417 33.8562 25.225 33.5687C25.5083 33.2812 25.65 32.925 25.65 32.5L25.65 23.5C25.65 23.075 25.5054 22.7188 25.2163 22.4313C24.927 22.1438 24.5687 22 24.1412 22C23.7137 22 23.3583 22.1438 23.075 22.4313C22.7916 22.7188 22.65 23.075 22.65 23.5L22.65 32.5C22.65 32.925 22.7946 33.2812 23.0837 33.5687C23.3729 33.8562 23.7313 34 24.1587 34ZM23.9991 18.3C24.4663 18.3 24.8583 18.1466 25.175 17.84C25.4917 17.5333 25.65 17.1533 25.65 16.7C25.65 16.2184 25.4919 15.8146 25.1759 15.4888C24.8599 15.163 24.4681 15 24.0009 15C23.5337 15 23.1417 15.163 22.825 15.4888C22.5083 15.8146 22.35 16.2184 22.35 16.7C22.35 17.1533 22.5081 17.5333 22.8241 17.84C23.1403 18.1466 23.5319 18.3 23.9991 18.3ZM24.0133 44C21.2555 44 18.6638 43.475 16.2383 42.425C13.8127 41.375 11.6917 39.9417 9.875 38.125C8.05835 36.3083 6.625 34.186 5.57495 31.7579C4.52502 29.33 4 26.7356 4 23.975C4 21.2144 4.52502 18.62 5.57495 16.192C6.625 13.764 8.05835 11.65 9.875 9.84998C11.6917 8.05005 13.814 6.625 16.2421 5.57495C18.67 4.52502 21.2644 4 24.025 4C26.7856 4 29.38 4.52502 31.808 5.57495C34.236 6.625 36.35 8.05005 38.15 9.84998C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2289 44 23.9867C44 26.7445 43.475 29.3362 42.425 31.7617C41.375 34.1873 39.95 36.3053 38.15 38.1158C36.35 39.9263 34.2333 41.3596 31.8 42.4158C29.3667 43.4719 26.7711 44 24.0133 44ZM24.025 41C28.7417 41 32.75 39.3417 36.05 36.025C39.35 32.7084 41 28.6917 41 23.975C41 19.2583 39.3531 15.25 36.0594 11.95C32.7656 8.65002 28.7458 7 24 7C19.3 7 15.2916 8.64685 11.975 11.9406C8.65833 15.2344 7 19.2542 7 24C7 28.7 8.65833 32.7084 11.975 36.025C15.2916 39.3417 19.3083 41 24.025 41Z" fill="#CCC5B9" fillOpacity="1.000000" fillRule="nonzero"/>
                            </g>
                        </svg>
                    {/* Код для svg */}
                </MotionLink>
            </nav>
            {isCatalogMenuVisible && <CatalogMenu toggleCatalogMenu={toggleCatalogMenu} onSelectCategory={onSelectCategory}/>}
            {isLoginMenuVisible && <LoginMenu toggleLoginMenu={toggleLoginMenu}/>}
        </header>
    )
}