import React, { Component } from 'react';
import { Search } from './Search';

import './Header.css';

import menuImg from '../../resources/images/menu_button.svg';
import companyLogo from '../../resources/images/yandex.svg';
import mailLogo from '../../resources/images/mail.svg';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="service-logo">
          <img className="service-logo__menu-img" src={menuImg} />
          <div className="service-logo__logo">
            <a href="http://yandex.ru">
              <img className="service-logo__company-img" src={companyLogo} />
            </a>
            <a href="">
              <img className="service-logo__service-img" src={mailLogo} />
            </a>
          </div>
        </div>
        <Search />
      </header>
    );
  }
}
