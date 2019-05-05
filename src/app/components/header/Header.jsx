import React, { Component } from 'react';
import '../../styles/main-header/main-header.css';
import '../../styles/main-header/__box-popup-menu/main-header__box-popup-menu.css';
import '../../styles/main-header/__logo-picture/main-header__logo-picture.css';
import logoPicture from '../../images/logo.png';
import { SearchLine } from './SearchLine';

export class Header extends Component {
  render() {
    return (
      <header id="main-header" className="main-header">
        <a href="#popup-menu" className="main-header__box-popup-menu" />
        <img src={logoPicture} className="main-header__logo-picture" alt="Логотип Яндекс Почты" />
        <SearchLine />
      </header>
    );
  }
}
