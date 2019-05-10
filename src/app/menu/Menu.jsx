import React, { Component } from 'react';

import './Menu.css';

export class Menu extends Component {
  render() {
    return (
      <div className="menu body__menu">
        <button className="menu__new-letter">Написать</button>
        <div className="menu__options">
          <a className="menu__option text">Входящие</a>
          <a className="menu__option text">Отправленные</a>
          <a className="menu__option text">Удаленные</a>
          <a className="menu__option text">Спам</a>
          <a className="menu__option text">Черновики</a>
          <a className="menu__option text">Создать папку</a>
        </div>
      </div>
    );
  }
}
