import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import productImage from './assets/img/product-image-1.webp';
import ScamPage from "./pages/ScamPage";
import InfoPage from "./pages/InfoPage";
import Header from "./components/Header";
import PopupMap from "./components/PopupMap";
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { Product, Category } from "./utils/types";
import axios from 'axios';

interface AppPopupMapState {
  isPopupMapVisible: boolean;
}

export default function App() {
  const [state, setState] = useState<AppPopupMapState>({
    isPopupMapVisible: false,
  });

  const [details, setDetails] = useState([]);
  
  useEffect(() => {
    let data;
    axios.get('http://localhost:8000')
      .then(res => {
        data = res.data;
        setDetails(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const togglePopupMap = () => {
    setState((prevState) => ({
      ...prevState,
      isPopupMapVisible: !prevState.isPopupMapVisible,
    }));
  };

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Шоколадка Mr. Beast',
      category: 'foods',
      price: 2000,
      image: {productImage}
    },
    {
      id: 2,
      name: 'Салат',
      category: 'foods',
      price: 200,
      image: {productImage}
    },
    {
      id: 3,
      name: 'Футболка',
      category: 'clothes',
      price: 1500,
      image: {productImage}
    },
    {
      id: 4,
      name: 'Мороженое',
      category: 'foods',
      price: 150,
      image: {productImage}
    },
    {
      id: 5,
      name: 'Фигурка',
      category: 'figures',
      price: 1799,
      image: {productImage}
    },
    {
      id: 6,
      name: 'Трансформер',
      category: 'toys',
      price: 19999,
      image: {productImage}
    },
    {
      id: 7,
      name: 'Старая игрушка Баз-Лайтер',
      category: 'toys',
      price: 2564235634563456,
      image: {productImage}
    },
    {
      id: 8,
      name: 'Комплект одежды',
      category: 'clothes',
      price: 756,
      image: {productImage}
    },
    {
      id: 9,
      name: 'Книга про ботанику',
      category: 'books',
      price: 2345,
      image: {productImage}
    },
    {
      id: 10,
      name: 'Книга белая',
      category: 'books',
      price: 150,
      image: {productImage}
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter(product =>
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCategory = (category: Category | 'all') => {
    setSelectedCategory(category);
  };
  
  return (
    <>
      <Header togglePopupMap={togglePopupMap} onSelectCategory={handleSelectCategory} onSearchChange={handleSearchChange}/>
      {state.isPopupMapVisible && <PopupMap togglePopupMap={togglePopupMap}/>}
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage products={filteredProducts} selectedCategory={selectedCategory}/>}/>
          <Route path="profile/*" element={<ProfilePage />}/>
          <Route path="product" element={<ProductPage value={4.4}/>}/>
          <Route path="payment" element={<PaymentPage />}/>
          <Route path="scam" element={<ScamPage />}/>
          <Route path="info" element={<InfoPage />}/>
        </Routes>
      </main>
    </>
  );
}