import React, { useState } from "react";
import { motion } from "framer-motion";

interface LoginMenuProps {
    toggleLoginMenu: () => void;
}

export default function LoginMenu({ toggleLoginMenu }: LoginMenuProps): JSX.Element {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
    }
    
    return(
        <>
            <div className="background-blackout" onClick={toggleLoginMenu}></div>
            <form className="popup-login">
                <div className="popup-login__top-container">
                    <div className="top-container__headings-text">
                        <h5 className="popup-menu__heading">
                            SusMarket <span>ID</span>
                        </h5>
                        <p className="top-container__text">
                            {isLoginMode ? 'Войдите с SusMarket ID' : 'Зарегистрируйтесь с SusMarket ID'}
                        </p>
                    </div>
                </div>
                <div className="popup-login__inputs-container">
                    <input type="text" name="userName" id="userName" className="popup-login__name-input" placeholder="Логин"/>
                    <input type="password" name="userPassword" id="userPassword"  className="popup-login__password-input" placeholder="Пароль"/>
                </div>
                <div className="popup-login__bottom-container">
                    <p className="popup-login__prompt-url" onClick={toggleMode}>
                        {isLoginMode ? 'У вас нет аккаунта? ' : 'У вас есть аккаунт? '}
                        <u>{isLoginMode ? 'Зарегистрироваться' : 'Войти'}</u>
                    </p>
                    <motion.button 
                        className="popup-login__login-button"
                        whileTap={{scale: 0.98}}
                        transition={{duration: 0.2, type: "spring"}}
                    >
                        {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
                    </motion.button>
                </div>
            </form>
        </>
    )
}