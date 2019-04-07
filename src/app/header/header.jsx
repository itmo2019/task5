import React from 'react';

import SearchForm from './search-form';

import './header.css';

import Pancakes from './header__pancakes.svg';
import Logo from './header__logo.svg';

function Header() {
  return (
    <header className="header">
      <button className="header__pancakes">
        <img alt="menu button" src={Pancakes} />
      </button>
      <div className="header__logo">
        <a href="https://mail.yandex.ru">
          <img alt="Yandex Mail logo" src={Logo} />
        </a>
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;
