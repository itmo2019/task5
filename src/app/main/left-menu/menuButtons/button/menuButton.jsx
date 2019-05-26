import React, { Component } from 'react';

import './menuButton.css';

export class MenuButton extends Component {
  render() {
    return (
      <li className="left-menu__text-menu">
        <a href="#" className="main-part_unhighlight main-part__del-line">
          {this.props.name}
        </a>
      </li>
    );
  }
}
