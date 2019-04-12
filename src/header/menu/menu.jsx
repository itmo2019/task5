import React from 'react';

import './menu.css';

function Menu() {
  return  <a className="header__menu" href='/' onClick={() => window.event.preventDefault()}>
    <div className="menu__stripe"></div>
    <div className="menu__stripe"></div>
    <div className="menu__stripe"></div>
  </a>;
}

export default Menu;
