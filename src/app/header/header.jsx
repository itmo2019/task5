import React, { Component } from 'react';

import './header.css';
import { Search } from '../search';
import logo from '../images/header-logo.svg';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__burgerMenu">
          <div className="header__line" />
          <div className="header__line" />
          <div className="header__line" />
        </div>
        <img className="header__ypLogo" src={logo} alt="logo" />
        <Search />
      </header>
    );
  }
}
