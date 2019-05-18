import React, { Component } from 'react';

import './header.css';
import cancel from '../images/cancel.png';
import lines from '../images/lines.svg';
import yandexLogo from '../images/yandex-logo.svg';
import mailLogo from '../images/mail-logo.svg';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="#" className="header__link">
          <img src={lines} className="header__lines" alt="lines" />
        </a>
        <a href="#" className="header__link">
          <img src={yandexLogo} className="header__link-yandex" alt="yanLogo" />
        </a>
        <a href="#" className="header__link">
          <img src={mailLogo} className="header__link-mail" alt="mailLogo" />
        </a>
        <label>
          <div className="header__search">
            <input className="header__search-input" type="text" placeholder="Поиск" />
            <img src={cancel} className="header__cancel-icon" alt="cancel" />
          </div>
        </label>
      </header>
    );
  }
}
