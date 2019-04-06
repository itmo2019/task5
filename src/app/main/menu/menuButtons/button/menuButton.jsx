import React, { Component } from 'react';

import './menuButton.css';

export class MenuButton extends Component {
  render() {
    return (
      <li className="menu-buttons__button">
        <a href="#" className="menu-buttons__button_default-link">
          {this.props.name}
        </a>
      </li>
    );
  }
}
