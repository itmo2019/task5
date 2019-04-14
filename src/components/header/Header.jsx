import React from 'react';
import './Header.css';

import yaLogo from './yandex-mail.png';

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="hamburger header__hamburger">
          <div className="hamburger__single-strip" />
          <div className="hamburger__single-strip" />
          <div className="hamburger__single-strip" />
        </div>
        <img className="ya-logo header__ya-logo" src={yaLogo} alt="yandex" />
        <input className="search-box header__search-box" type="search" placeholder="Поиск" />
      </div>
    );
  }
}
