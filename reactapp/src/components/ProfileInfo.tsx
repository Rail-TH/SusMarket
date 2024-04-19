import React from "react";
import ProfileAvatar from '../assets/icons/profile-avatar.svg';
import '../ProfileStyle.scss';

export default function ProfileInfo() {
    return(
        <div className="profile-page__info-div">
            <img src={ProfileAvatar} alt="" className="info-div__img"/>
            <span>Роман Константинов</span>
        </div>
    )
}