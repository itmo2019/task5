import React, { Component } from 'react';

import './newLetterButton.css';

export class NewLetterButton extends Component {
  render() {
    return (
      <button className="menu__new-letter-button" onClick={this.props.onClick}>
        <span className="menu__new-letter-button-text">Написать</span>
      </button>
    );
  }
}
