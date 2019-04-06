import React, { Component } from 'react';

import Hamburger from '../hamburger';
import Logo from '../logo';
import Search from '../search';

import './header.css';

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header__Hamburger">
          <Hamburger />
        </div>
        <Logo />
        <Search />
      </header>
    );
  }
}

export default Header;
