import React, { Component } from 'react';

import './burgerMenu.css';

export class BurgerMenu extends Component {
  render() {
    return (
      <div className="burger-menu">
        <div className="burger-menu__rectangle" />
        <div className="burger-menu__rectangle" />
        <div className="burger-menu__rectangle" />
      </div>
    );
  }
}
