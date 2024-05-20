import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface LoginMenuProps {
  toggleLoginMenu: () => void;
}

function LoginMenu({ toggleLoginMenu }: LoginMenuProps) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleMode = useCallback(() => setIsLoginMode(prev => !prev), []);

  const handleClose = useCallback(() => {
    document.body.classList.remove('no-scroll');
    toggleLoginMenu();
  }, [toggleLoginMenu]);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleAuth = async (isRegistering: boolean) => {
    const baseUrl = window.location.origin;

    try {
      const endpoint = isRegistering
        ? `${baseUrl}/api/post/user`
        : `${baseUrl}/api/get/user`;

      const params = new URLSearchParams({
        login: encodeURIComponent(login),
        password: encodeURIComponent(password),
      });

      const response = await axios.get(`${endpoint}?${params.toString()}`);

      if (isRegistering || (response.data.user && response.data.user.length > 0)) {
        Cookies.set('user', login, { expires: 1 });
        Cookies.set('user_id', response.data.user[0].id, { expires: 1 });
        navigate('/profile');
        toggleLoginMenu();
      } else {
        alert('Пользователь не найден.');
      }
    } catch (error) {
      alert('Ошибка при авторизации: ' + error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleAuth(!isLoginMode);
  };

  return (
    <>
      <div className="background-blackout" onClick={handleClose}></div>
      <form className="popup-login" onSubmit={handleSubmit}>
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
          <input
            type="text"
            name="userName"
            id="userName"
            className="popup-login__name-input"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            className="popup-login__password-input"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="popup-login__bottom-container">
          <p className="popup-login__prompt-url" onClick={toggleMode}>
            {isLoginMode ? 'У вас нет аккаунта? ' : 'У вас есть аккаунт? '}
            <u>{isLoginMode ? 'Зарегистрироваться' : 'Войти'}</u>
          </p>
          <motion.button
            type="submit"
            className="popup-login__login-button"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, type: 'spring' }}
          >
            {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
          </motion.button>
        </div>
      </form>
    </>
  );
}

export default LoginMenu;