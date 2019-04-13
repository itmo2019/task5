import React, { Component } from 'react';

import './ya-big-button.css';

export class YaBigButton extends Component {
  render() {
    return (
      <button className="ya-big-button" type="button" onClick={this.props.action}>
        Написать
      </button>
    );
  }
}

export default YaBigButton;
