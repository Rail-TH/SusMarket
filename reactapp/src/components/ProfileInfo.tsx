import React from "react";
import ProfileAvatar from '../assets/img/profile-avatar.png';
import '../ProfileStyle.scss';

export default function ProfileInfo() {
    return(
        <div className="profile-section__info-div">
            <img src={ProfileAvatar} alt="" className="info-div__img"/>
            <span>Роман Константинов</span>
        </div>
    )
}