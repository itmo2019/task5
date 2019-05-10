import React, { Component } from 'react';

import './Header.css';
import { Logo } from './Logo';
import { Search } from './Search';

export class Header extends Component {
  render() {
    return (
      <div className="header body__header">
        <div className="menu-logo header__menu-logo">
          <div className="menu-logo__part" />
          <div className="menu-logo__part" />
          <div className="menu-logo__part" />
        </div>
        <Logo />
        <Search />
      </div>
    );
  }
}
