import React from 'react';

import './menu.css';

import SidebarMenu from '../../../images/sidebar-menu.png';

function Menu() {
  return (
    <div className="page_inline page__ya-menu-logo">
      <a href="/">
        <img className="page__sidebar-menu" src={SidebarMenu} alt="menu" width="25" height="29" />
      </a>
    </div>
  );
}

export default Menu;
