import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import ScamPage from "./pages/ScamPage";
import Header from "./components/Header";
import SearchIcon from "../src/assets/icons/search-form__icon.svg";
import React from "react";
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header SearchIcon={SearchIcon}/>
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="profile/*" element={<ProfilePage />}/>
          <Route path="Product" element={<ProductPage />}/>
          <Route path="payment" element={<PaymentPage />}/>
          <Route path="scam" element={<ScamPage />}/>
        </Routes>
      </main>
    </>
  );
}