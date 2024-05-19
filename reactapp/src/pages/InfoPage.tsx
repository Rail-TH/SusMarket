import React from "react";
import DevCard from "../components/DevCard";
import "../InfoPageStyle.scss";
import RailTHAvatar from "../assets/img/info-page__railth-avatar.png";
import NoKesspenAvatar from "../assets/img/info-page__no-kesspen-avatar.png";

export default function InfoPage() {
    return (
        <section className="info-page">
            <DevCard 
                avatar={NoKesspenAvatar}
                name="No_Kesspen"
                info="Backend & Frontend разработчик"
                url="https://github.com/KessPenGames"
            />
            <DevCard 
                avatar={RailTHAvatar}
                name="Rail_TH"
                info="Frontend разработчик"
                url="https://github.com/Rail-TH"
            />
        </section>
    );
}