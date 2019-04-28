import React from 'react';
import yandexLogo from '../../img/yandex.svg';
import mailLogo from '../../img/mail.svg';

import './yandex-mail-logo.css';

export function YandexMailLogo() {
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
