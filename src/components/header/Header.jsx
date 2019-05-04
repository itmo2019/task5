import React, { Component } from 'react';
import { Search } from './Search';

import './Header.css';

import menuImg from '../../resources/images/menu_button.svg';
import serviceLogo from '../../resources/images/mail_logo.png';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="service-logo">
          <MenuButton />
          <ServiceLogo />
        </div>
        <Search />
      </header>
    );
  }
}

function MenuButton() {
  return <img className="service-logo__menu-img" src={menuImg} />;
}

function ServiceLogo() {
  return <img className="service-logo__logo-img" src={serviceLogo} />;
}
