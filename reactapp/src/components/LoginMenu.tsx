import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface LoginMenuProps { // Интерфейс для пропсов компонента LoginMenu
  toggleLoginMenu: () => void; // Функция для переключения видимости меню входа
}

export default function LoginMenu({ toggleLoginMenu }: LoginMenuProps) {
  const [isLoginMode, setIsLoginMode] = useState(true); // Состояние для определения режима входа или регистрации
  const [login, setLogin] = useState(''); // Состояние для хранения введенного логина
  const [password, setPassword] = useState(''); // Состояние для хранения введенного пароля
  const navigate = useNavigate(); // Функция для навигации

  const toggleMode = () => setIsLoginMode(!isLoginMode); // Функция для переключения режима входа или регистрации

  const handleClose = () => { // Функция для закрытия меню входа
    document.body.classList.remove('no-scroll'); // Удаление класса "no-scroll" с тела документа
    toggleLoginMenu(); // Вызов функции переключения видимости меню входа
  };

  useEffect(() => { // Эффект для добавления класса "no-scroll" с тела документа при монтировании компонента
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleAuth = async (isRegistering: boolean) => { // Функция для обработки авторизации
    try {
      let response;
      if (isRegistering) {
        response = await axios.get(
          `http://127.0.0.1:8000/api/post/user?login=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`
        );
      } else {
        response = await axios.get(
          `http://127.0.0.1:8000/api/get/user?login=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`
        );
        if (response.data.user.length === 0) {
          alert('Пользователь не найден.');
          return;
        }
      }

      if (response.status === 200) {
        Cookies.set('user', login, { expires: 1 }); // Установка куки с логином
        Cookies.set('user_id', response.data.user[0].id, { expires: 1 }); // Установка куки с ID пользователя
        navigate('/profile'); // Переход на страницу профиля
        toggleLoginMenu(); // Вызов функции переключения видимости меню входа
      }
    } catch (error) {
      alert('Ошибка при авторизации: ' + error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { // Функция для обработки отправки формы
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