import React, { Component } from 'react';

import './header.css';

import yandexMailLogo from '../../resources/mail_logo_for_top.png';
import logoLines from '../../resources/logo_lines.svg';

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img className="mail-header__tools-icon" src={logoLines} alt="logo-lines" />
        <img
          className="mail-header__logo"
          src={yandexMailLogo}
          width="153"
          height="31"
          alt="yandex mail logo"
        />
        <input className="main-header__search" type="search" placeholder="Поиск" />
      </header>
    );
  }
}

export default Header;
