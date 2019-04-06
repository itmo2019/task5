import React, { Component } from 'react';

import './menu.css';
import { MenuButtons } from './menuButtons';
import { newMail } from '../../../js/script';

export class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <button className="menu__new-letter-button" onClick={newMail}>
          <span className="menu__new-letter-button-text">Написать</span>
        </button>
        <MenuButtons />
      </div>
    );
  }
}
