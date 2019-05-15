import React from 'react';
import './logo.css';

import logoImg from '../../resources/images/YandexLogo.svg';

export default function Logo(props) {
  const { className } = props;

  return (
    <div className={`logo ${className}`}>
      <img src={logoImg} alt="Яндекс Почта" />
      <a className="logo__yandex" href="https://yandex.ru" />
      <a className="logo__mail" href="https://mail.yandex.ru" />
    </div>
  );
}
