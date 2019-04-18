import React, { Component } from 'react';
import { block } from 'bem-cn';

import './aside-menu.css';

const b = block('aside-menu');

function AsideMenuFolder({ children, active, main }) {
  return <a className={b('folder', {active: active, main: main}).toString()}>{children}</a>;
}

class AsideMenu extends Component {
  render() {
    return (
      <div>
        <button type="button" className={b('compose-button').toString()}>
          Написать
        </button>
        <div className={b('folder-list').toString()}>
          <AsideMenuFolder active main>Входящие</AsideMenuFolder>
          <AsideMenuFolder>Отправленные</AsideMenuFolder>
          <AsideMenuFolder>Удаленные</AsideMenuFolder>
          <AsideMenuFolder>Спам</AsideMenuFolder>
          <AsideMenuFolder>Черновики</AsideMenuFolder>
          <AsideMenuFolder>Создать папку</AsideMenuFolder>
        </div>
      </div>
    );
  }
}

export default AsideMenu;
