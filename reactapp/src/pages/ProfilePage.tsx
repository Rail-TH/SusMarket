import React from "react";
import Banner from "../components/AddBanner";
import '../ProfileStyle.scss';
import { Route, Routes } from "react-router-dom";
import ProfileOrders from "../components/ProfileOrders";
import ProfilePurchases from "../components/ProfilePurchases";

export default function ProfilePage() {
    return(
        <section className="profile-section">
            <Banner />
            <Routes>
                <Route path="/" element={<ProfileOrders/>}/>
                <Route path="purchases" element={<ProfilePurchases/>}/>
            </Routes>
        </section>
    )
}