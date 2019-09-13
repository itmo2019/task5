import React, { Component } from 'react';

import './app.css';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="img">
          <img
            className="img__toolbar"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
            width="31px"
            alt="toolbar"
          />
        </div>
        <div className="logo">
          <img
            className="logo__img"
            src="http://breakfast.ffin.ru/wp-content/themes/breakfast/images/svg/yandexmail.svg"
            width="175px"
            alt="logo"
          />
        </div>
        <div className="search">
          <input type="text" className="search__search-form" value="Поиск" />
        </div>
      </div>
    );
  }
}

export default Header;
