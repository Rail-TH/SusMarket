import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import ScamPage from "./pages/ScamPage";
import InfoPage from "./pages/InfoPage";
import Header from "./components/Header";
import PopupMap from "./components/PopupMap";
import { Product, Category } from "./utils/types";

interface AppPopupMapState {
  isPopupMapVisible: boolean;
}

export default function App() {
  // Состояние для отображения/скрытия карты
  const [state, setState] = useState<AppPopupMapState>({
    isPopupMapVisible: false,
  });

  // Массив товаров
  const [products, setProducts] = useState<Product[]>([]);
  // Выбранная категория или все категории
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  // Поисковый запрос
  const [searchQuery, setSearchQuery] = useState('');

  // Получение товаров при загрузке компонента
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/get/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('There was an error fetching the products', error);
      });
  }, []);

  // Функция для переключения отображения/скрытия карты
  const togglePopupMap = () => {
    setState((prevState) => (
      {
        ...prevState,
        isPopupMapVisible: !prevState.isPopupMapVisible,
      }
    ));
  };

  // Обработчик изменения поискового запроса
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  // Фильтрация продуктов по выбранной категории и поисковому запросу
  const filteredProducts = products.filter(product =>
    (selectedCategory === 'all' || product.category_id === selectedCategory.id) &&
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Обработчик выбора категории
  const handleSelectCategory = (category: Category | 'all') => {
    setSelectedCategory(category);
  };
  
  return (
    <>
      {/* Шапка сайта */}
      <Header 
        togglePopupMap={togglePopupMap} 
        onSelectCategory={handleSelectCategory} 
        onSearchChange={handleSearchChange}
      />
      {/* Карта */}
      {state.isPopupMapVisible && <PopupMap togglePopupMap={togglePopupMap}/>}
      {/* Основной контент */}
      <main className="main">
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<HomePage products={filteredProducts}/>}/>
          {/* Страница профиля */}
          <Route path="profile/*" element={<ProfilePage />}/>
          {/* Страница продукта */}
          <Route path="product/:id" element={<ProductPage/>}/>
          {/* Страница оплаты */}
          <Route path="payment" element={<PaymentPage />}/>
          {/* Страница с описанием */}
          <Route path="scam" element={<ScamPage />}/>
          {/* Страница информации */}
          <Route path="info" element={<InfoPage />}/>
        </Routes>
      </main>
    </>
  );
}

