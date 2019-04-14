import React, { Component } from 'react';

import './yandex-mail-logo.css';

import yandexLogo from '../../img/yandex.svg';
import mailLogo from '../../img/mail.svg';

export class YandexMailLogo extends Component {
  render() {
    return (
      <div className="yandex-mail-logo">
        <a href="https://yandex.ru">
          <img className="yandex-mail-logo__link-yandex" src={yandexLogo} alt="Яндекс Логотип" />
        </a>
        <a href="https://mail.yandex.ru">
          <img className="yandex-mail-logo__link-mail" src={mailLogo} alt="Почта Логотип" />
        </a>
      </div>
    );
  }
}
