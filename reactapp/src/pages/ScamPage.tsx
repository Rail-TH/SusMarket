import React from "react";
import '../ScamStyle.scss';
import ScamImage from "../assets/img/scam-image.png";

function ScamPage() {
    return(
        <section className="scam-page">
            <img src={ScamImage} alt="scam mammoth" className="scam-page__image"/>
        </section>
    )
}

export default ScamPage;