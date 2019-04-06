import React from 'react';

import './yandex-service-logo.css';

import YandexMail from '../../resources/yandex-mail.png';

function YandexServiceLogo() {
  return  <div className="header__yandex-service-logo">
    <a className="yandex-service-logo__image-link">
      <img className="yandex-service-logo__image" src={YandexMail} alt="yandex"/>
    </a>
  </div>;
}

export default YandexServiceLogo;
