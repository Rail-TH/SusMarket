import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Category } from '../utils/types';

interface CatalogMenuProps { // Пропсы, которые компонент принимает
  toggleCatalogMenu: () => void; // Функция для закрытия меню
  onSelectCategory: (category: Category | 'all') => void; // Функция для выбора категории
}

export default function CatalogMenu({ toggleCatalogMenu, onSelectCategory }: CatalogMenuProps) {
  const [categories, setCategories] = useState<Category[]>([]); // Состояние для хранения категорий

  useEffect(() => { // При монтировании компонента запрашиваем категории с сервера
    axios.get('http://127.0.0.1:8000/api/get/category')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {
        console.error(`Ошибка при получении данных: ${error}`); // Обрабатываем ошибку
      });
  }, []);

  return (
    <>
      {/* Задний фон для закрытия меню */}
      <div className="background-blackout" onClick={toggleCatalogMenu}></div>
      {/* Список категорий */}
      <ul className="catalog-menu">
        {categories.map((category) => (
          <li
            key={category.id}
            className="catalog-menu__point-li"
            onClick={() => onSelectCategory(category)} // Выбор категории
          >
            <img
              className="catalog-menu__category-icon"
              src={category.image}
              alt={category.title}
            />
            {category.title}
          </li>
        ))}
      </ul>
    </>
  );
}