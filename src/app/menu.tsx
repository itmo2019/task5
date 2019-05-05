import * as React from 'react';
import '../blocks/logo__picture.css';
import '../blocks/menu.css';
import '../blocks/logo.css';
import '../blocks/menu__header.css';
import { Hamburger } from './hamburger';
import { MenuButton } from './menu-button';
import logo from '../images/logoYandex.png';

interface MenuProps {
  newMail: () => void
}

export const Menu = ({ newMail }: MenuProps) => {
  return (
    <div className="menu">
      <div className="menu__header">
        <Hamburger />
        <div className="logo">
          <img alt="Яндекс.Почта" className="logo__picture" src={logo} />
        </div>
      </div>
      <MenuButton action={newMail} special name="Новое письмо" />
      <MenuButton name="Входящие" current />
      <MenuButton name="Отправленные" />
      <MenuButton name="Удалённые" />
      <MenuButton name="Спам" />
      <MenuButton name="Черновики" />
      <MenuButton name="Создать папку" />
    </div>
  );
};
