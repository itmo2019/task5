import React, { Component } from 'react';
import { block } from 'bem-cn';

import Hamburger from '../hamburger';
import Logo from '../logo';
import Search from '../search';

import './header.css';

const b = block('header');

class Header extends Component {
  render() {
    return (
      <header className={b().toString()}>
        <div className={b('hamburger').toString()}>
          <Hamburger />
        </div>
        <Logo />
        <Search />
      </header>
    );
  }
}

export default Header;
