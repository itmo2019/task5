import React, { Component } from 'react';

import './header.css';
import { MenuIcon } from './menuIcon';
import { SearchBox } from './searchBox';
import { YandexLogo } from './yandexLogo';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <MenuIcon/>
        <YandexLogo/>
        <SearchBox/>
      </header>
    );
  }
}
