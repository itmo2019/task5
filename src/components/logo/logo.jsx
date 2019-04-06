import React from 'react';

import './logo.css';

import logoImg from '../../resources/images/YandexLogo.svg';

export default function Logo(props) {
  return (
    <div className={`Logo ${props.className}`}>
      <img src={logoImg} alt="Яндекс Почта" />
      <a className="Logo__Yandex" href="https://yandex.ru" />
      <a className="Logo__Mail" href="https://mail.yandex.ru" />
    </div>
  );
}
