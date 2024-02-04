import React from "react";
import Banner from "../components/AddBanner";
import ProfileOrders from "../components/ProfileOrders";
import ProfilePurchases from "../components/ProfilePurchases";
import '../ProfileStyle.scss';
import { Routes, Route, Link } from 'react-router-dom';

export default function ProfilePage() {
    return(
        <section className="profile-section">
            <Banner />
            <Routes>
                <Route path="/profile/orders" element={<ProfileOrders />} />
                <Route path="/profile/orders" element={<ProfilePurchases />} />
            </Routes>
        </section>
    )
}