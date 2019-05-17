import React from 'react';

import '../styles/header.css';
import logo from '../images/YaLogo.png';

function ActionButton() {
  return (
    <div className="action-button">
      <div className="action-button__line_transparent_height_8px">

      </div>
      {[...Array(3)].map(() => {
        return (<div>
          <div className="action-button__line_black">
          </div>
          <div className="action-button__line_transparent">
          </div>
        </div>)
      })}
    </div>
  );
}

export function MailHeader() {
  return (
    <header className="logo-action-search">
      <ActionButton/>
      <div className="logo">
        <img src={logo} className="logo__image"/>
      </div>
      <div className="search">
        <input className="search__search-input" placeholder="Поиск"/>
        <div className="search__close-button">&times;</div>
      </div>
    </header>
  );
}
