import React, { Component } from 'react';

import './header.css';

import { BurgerMenu } from './burger-menu';
import { Logo } from './logo';
import { Search } from './search';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <BurgerMenu />
        <Logo />
        <Search />
      </header>
    );
  }
}
