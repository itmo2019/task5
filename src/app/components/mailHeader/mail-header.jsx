import React from 'react';

import './mail-header.css';
import logoYandex from '../../images/yandexLogo.svg';
import logoYandexService from '../../images/yandexServiceLogo.svg';

export function MailHeader() {
  return (
    <header className="mail-header">
      <div className="mail-header__svgicon-menu" />
      <div className="mail-header__logo-container">
        <a
          className="mail-header__logo-container-svgicon-yandex"
          target="_blank"
          rel="noopener noreferrer"
          href="https://yandex.ru/"
        >
          <img src={logoYandex} alt="Logo Yandex" />
        </a>
        <a
          className="mail-header__logo-container-svgicon-mail"
          target="_blank"
          rel="noopener noreferrer"
          href="https://mail.yandex.ru/"
        >
          <img src={logoYandexService} alt="Logo Yandex service" />
        </a>
      </div>
      <div className="mail-header__search-container">
        <input className="search-container__search" type="search" placeholder="Поиск" />
      </div>
    </header>
  );
}
