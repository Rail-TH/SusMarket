import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header";
import PopupMap from "./components/PopupMap";
import { Product, Category } from "./utils/types";

// Lazy load pages for better performance
const LazyHomePage = React.lazy(() => import("./pages/HomePage"));
const LazyPaymentPage = React.lazy(() => import("./pages/PaymentPage"));
const LazyProductPage = React.lazy(() => import("./pages/ProductPage"));
const LazyProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const LazyScamPage = React.lazy(() => import("./pages/ScamPage"));
const LazyInfoPage = React.lazy(() => import("./pages/InfoPage"));

export default function App() {
    const [isPopupMapVisible, setIsPopupMapVisible] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/get/products');
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching the products:', error);
            }
        };
        fetchProducts();
    }, []);

    const togglePopupMap = useCallback(() => {
        setIsPopupMapVisible(prevState => {
            document.body.classList.toggle('no-scroll', !prevState);
            return !prevState;
        });
    }, []);

    const handleSearchChange = useCallback((query: string) => {
        setSearchQuery(query);
    }, []);

    const filteredProducts = useMemo(() => products.filter(product =>
        (selectedCategory === 'all' || product.category_id === selectedCategory.id) &&
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ), [products, selectedCategory, searchQuery]);

    const handleSelectCategory = useCallback((category: Category | 'all') => {
        setSelectedCategory(category);
    }, []);

    return (
        <>
            <Header 
                togglePopupMap={togglePopupMap} 
                onSelectCategory={handleSelectCategory} 
                onSearchChange={handleSearchChange}
            />
            {isPopupMapVisible && <PopupMap togglePopupMap={togglePopupMap} />}
            <main className="main">
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<LazyHomePage products={filteredProducts} />} />
                        <Route path="profile/*" element={<LazyProfilePage />} />
                        <Route path="product/:id" element={<LazyProductPage />} />
                        <Route path="payment" element={<LazyPaymentPage />} />
                        <Route path="scam" element={<LazyScamPage />} />
                        <Route path="info" element={<LazyInfoPage />} />
                    </Routes>
                </React.Suspense>
            </main>
        </>
    );
}