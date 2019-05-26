import React, { Component } from 'react';

import './newLetterButton.css';

export class NewLetterButton extends Component {
  render() {
    return (
      <button className="left-menu__button" onClick={this.props.onClick}>
        <span className="left-menu__text-write">Написать</span>
      </button>
    );
  }
}
