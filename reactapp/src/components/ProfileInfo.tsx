import React from "react";
import ProfileAvatar from '../assets/icons/profile-avatar.svg';
import '../ProfileStyle.scss';
import Cookies from "js-cookie";

export default function ProfileInfo() {
    const userLogin = Cookies.get('user');
    
    return(
        <div className="profile-page__info-div">
            <img src={ProfileAvatar} alt="" className="info-div__img"/>
            <span>{userLogin || 'Гость'}</span>
        </div>
    )
}