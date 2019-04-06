import React from 'react';
import './Header.css';

import yaLogo from '../../resources/yandex-mail.png';

export class Header extends React.Component {
  render() {
      return <div className="header">
          <div className="hamburger header__hamburger">
              <div className="hamburger__single-strip"></div>
              <div className="hamburger__single-strip"></div>
              <div className="hamburger__single-strip"></div>
          </div>
          <img className="ya-logo header__ya-logo" src={yaLogo} alt="yandex" height="25" width="150"/>
          <input className="search-box header__search-box" type="search" placeholder="Поиск"/>
      </div>;
  }
}
