import React, { Component } from 'react';

import './button.css';

export class Button extends Component {
  render() {
    return (
      <li className="button__textMenu">
        <a href="#" className="button_unhighlight button__delLine">
          {this.props.name}
        </a>
      </li>
    );
  }
}
