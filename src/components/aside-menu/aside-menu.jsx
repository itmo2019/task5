import React, { Component } from 'react';

import './aside-menu.css';

class AsideMenuFolder extends Component {
  render() {
    const active = this.props.active ? ' AsideMenu__Folder_Active' : '';
    const main = this.props.main ? ' AsideMenu__Folder_Main' : '';

    return <a className={`AsideMenuFolder${active}${main}`}>{this.props.text}</a>;
  }
}

export class AsideMenu extends Component {
  render() {
    return (
      <div>
        <button type="button" className="AsideMenu__ComposeButton">
          Написать
        </button>
        <div className="AsideMenu__FolderList">
          <div className="AsideMenu__Folder_Active AsideMenu__Folder_Main">
            <AsideMenuFolder text="Входящие" active main />
          </div>
          <AsideMenuFolder text="Отправленные" />
          <AsideMenuFolder text="Удаленные" />
          <AsideMenuFolder text="Спам" />
          <AsideMenuFolder text="Черновики" />
          <AsideMenuFolder text="Создать папку" />
        </div>
      </div>
    );
  }
}

export default AsideMenu;
