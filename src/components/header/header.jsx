import React, { Component } from 'react';

import './header.css';

import yandexMailLogo from '../../resources/mail_logo_for_top.png';
import logoLines from '../../resources/logo_lines.svg';

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img className="Header__tools-icon" src={logoLines} alt="logo-lines" />
        <img
          className="Header__logo"
          src={yandexMailLogo}
          width="153"
          height="31"
          alt="yandex mail logo"
        />
        <input className="Header__search" type="search" placeholder="Поиск" />
      </header>
    );
  }
}

export default Header;
