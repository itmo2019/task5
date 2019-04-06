import React, { Component } from 'react';

import './header.css';
import logo from './images/yandex-mail-logo.svg';
import { BurgerMenu } from './burgerMenu';
import { SearchInput } from './searchInput';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <BurgerMenu />
        <a href="https://mail.yandex.ru">
          <img className="header__yandex-mail-logo" src={logo} alt="logo" />
        </a>
        <SearchInput />
      </header>
    );
  }
}
