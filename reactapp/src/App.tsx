import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import ScamPage from "./pages/ScamPage";
import Header from "./components/Header";
import PopupMap from "./components/PopupMap";
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

interface AppPopupMapState {
  isPopupMapVisible: boolean;
}

export default function App() {
  const [state, setState] = useState<AppPopupMapState>({
    isPopupMapVisible: false,
  });

  const togglePopupMap = () => {
    setState((prevState) => ({
      ...prevState,
      isPopupMapVisible: !prevState.isPopupMapVisible,
    }));
  };
  
  return (
    <>
      <Header togglePopupMap={togglePopupMap}/>
      {state.isPopupMapVisible && <PopupMap togglePopupMap={togglePopupMap}/>}
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