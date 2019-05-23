import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <li
        className={`buttons-list__element${
          this.props.styleModifier !== '' ? ` ${this.props.styleModifier}` : ''
        }`}
      >
        {this.props.name}
      </li>
    );
  }
}
