import React from 'react';
import { DeveloperCard } from "../utils/types"

export default function DevCard({ avatar, name, info, url }: DeveloperCard) {
  return (
    <div className="info-page__dev-card">
      <div className="dev-card__inner">
        <div className="dev-card__front">
          <img src={avatar} alt={name} className="dev-card__avatar" />
        </div>
        <div className="dev-card__back">
          <div>
            <h3 className='dev-card__name'>{name}</h3>
            <p className='dev-card__info'>{info}</p>
          </div>
          <a className='dev-card__url' href={url} target='_blank' rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}