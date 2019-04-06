import React from 'react';

import SearchForm from './search-form';

import './header.css';

function Header() {
  return (
    <header className="header">
      <button className="header__pancakes">
        <img alt="menu button" src="./header__pancakes.svg" />
      </button>
      <div className="header__logo">
        <a href="https://mail.yandex.ru">
          <img alt="Yandex Mail logo" src="./header__logo.svg" />
        </a>
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;
