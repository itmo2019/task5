import React, { Component } from 'react';

import './burger-menu.css';

export class BurgerMenu extends Component {
  render() {
    return (
      <div className="burger-menu header__burger-menu">
        <div className="burger-menu__element burger-menu__element_without-top-margine" />
        <div className="burger-menu__element" />
        <div className="burger-menu__element" />
      </div>
    );
  }
}
