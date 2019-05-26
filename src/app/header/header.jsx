import React, { Component } from 'react';

import './header.css';
import logo from './images/header-logo.svg';
import { BurgerMenu } from './burgerMenu';
import { Search } from './search';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <BurgerMenu />
        <img className="header__yp-logo" src={logo} alt="logo" />
        <Search />
      </header>
    );
  }
}
