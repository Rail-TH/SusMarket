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
    const [state, setState] = useState<AppPopupMapState>({ isPopupMapVisible: false });
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get/products')
            .then(response => {
                setProducts(response.data.products);
            })
            .catch(error => {
                console.error('Error fetching the products:', error);
            });
    }, []);

    const togglePopupMap = () => {
        setState(prevState => {
            if (!prevState.isPopupMapVisible) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
            return { ...prevState, isPopupMapVisible: !prevState.isPopupMapVisible };
        });
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };

    const filteredProducts = products.filter(product =>
        (selectedCategory === 'all' || product.category_id === selectedCategory.id) &&
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectCategory = (category: Category | 'all') => {
        setSelectedCategory(category);
    };

    return (
        <>
            <Header 
                togglePopupMap={togglePopupMap} 
                onSelectCategory={handleSelectCategory} 
                onSearchChange={handleSearchChange}
            />
            {state.isPopupMapVisible && <PopupMap togglePopupMap={togglePopupMap} />}
            <main className="main">
                <Routes>
                    <Route path="/" element={<HomePage products={filteredProducts} />} />
                    <Route path="profile/*" element={<ProfilePage />} />
                    <Route path="product/:id" element={<ProductPage />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="scam" element={<ScamPage />} />
                    <Route path="info" element={<InfoPage />} />
                </Routes>
            </main>
        </>
    );
}