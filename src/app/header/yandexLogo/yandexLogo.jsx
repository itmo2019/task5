import React, { Component } from 'react';

import './yandexLogo.css';
import logo from './images/yamail.png';

export class YandexLogo extends Component {
  render() {
    return (
      <div className="yandex-logo header__yandex-logo">
        <img className="yandex-logo__img" src={logo} alt={logo}/>
      </div>
    );
  }
}
