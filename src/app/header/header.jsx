import React, { Component } from 'react';

import './header.css';

import headerMail from '../../images/header-mail.svg';
import headerYandex from '../../images/header-yandex.svg';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__menu">
          <div className="header__rectangle" />
          <div className="header__rectangle" />
          <div className="header__rectangle" />
        </div>
        <div className="header__title">
          <img className="header__logo" src={headerYandex} alt="logo" />
          <img className="header__logo" src={headerMail} alt="logo" />
        </div>
        <div className="header__search">
          <input className="header__search-input" type="search" placeholder="Поиск" />
          <button className="header__search-cancel-button" type="button" />
        </div>
      </header>
    );
  }
}
