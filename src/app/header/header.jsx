import React, { Component } from 'react';

import './header.css';

export class Header extends Component {
  render() {
    return (
      <header className="content__header">
        <div className="logo content_inline content__ya-services-popup">
          <img src={require('../../static/burger-menu.png')} width="25" height="29" alt="" />
        </div>
        <img
          className="content__ya-mail-logo"
          src={require('../../static/ya-mail-logo.png')}
          width="153"
          height="31"
          alt=""
        />
        <input className="content__top-search" type="search" placeholder="Поиск" />
      </header>
    );
  }
}
