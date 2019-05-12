import React, { Component } from 'react';

import './menuIcon.css';
import icon from './images/menu-icon.png';

export class MenuIcon extends Component {
  render() {
    return (
      <div className="menu-icon header__menu-icon">
        <img className="menu-icon__img" src={icon} alt={icon}/>
      </div>
    );
  }
}
