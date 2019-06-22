import React from 'react';

import './header.css';

import { Menu } from '../menu/menu';
import yandexLogo from './Yandex.png';

export function Header() {
  return (
    <header className="header">
      <Menu />
      <img className="header__pic-yandex" src={yandexLogo} alt="Яндекс Почта" height="31px" />
      <input className="header__search" type="text" placeholder="Поиск" />
      <div className="header__close">×</div>
    </header>
  );
}
