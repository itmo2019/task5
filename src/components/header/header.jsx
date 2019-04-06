import React, { Component } from 'react';
import classNames from 'classnames';
import { BurgerMenu } from '../burger-menu';
import { SearchBox } from '../search-box';
import './header.css';
import logo from '../../resources/img/main-logo.png';

export class Header extends Component {
  render() {
    return (
      <header className={classNames('Header', this.props.className)}>
        <BurgerMenu className="Header__BurgerMenu" />
        <img className="Header__MainLogo" src={logo} alt="Яндекс Почта" />
        <SearchBox className="Header__SearchBox" placeholder="Поиск" />
      </header>
    );
  }
}
