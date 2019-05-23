import React, { Component } from 'react';

import  './Header.css';

import YandexLogo from '../../resources/images/yandex-logo.svg'

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={YandexLogo} className="header__mail-logo" />
        <form className="search-bar search-bar_position">
          <input type="text" placeholder="Поиск" className="search-bar__input search-bar__input_view" />
        </form>
      </header>
    );
  }
}
