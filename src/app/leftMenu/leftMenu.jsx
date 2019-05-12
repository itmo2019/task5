import React, { Component } from 'react';

import './leftMenu.css';

export class LeftMenu extends Component {
  render() {
    return (
      <nav className="left-menu">
        <button className="left-menu__button">Написать</button>
        <div className="left-menu__line left-menu__line_light"><a className="left-menu__link" href="#">Входящие</a>
        </div>
        <div className="left-menu__line"><a className="left-menu__link" href="#">Отправленные</a></div>
        <div className="left-menu__line"><a className="left-menu__link" href="#">Удаленные</a></div>
        <div className="left-menu__line"><a className="left-menu__link" href="#">Спам</a></div>
        <div className="left-menu__line"><a className="left-menu__link" href="#">Черновики</a></div>
        <div className="left-menu__line"><a className="left-menu__link" href="#">Создать папку</a></div>
      </nav>
    );
  }
}
