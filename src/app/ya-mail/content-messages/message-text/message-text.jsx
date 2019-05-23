import React, { Component } from 'react';

import './message-text.css';

import Round from '../../../../images/round.png';

export class MessageText extends Component {
  render() {
    return (
      <div className="message-text content-messages__message-text">
        <label
          htmlFor="message-select1"
          className="message-text__exit"
          onClick={this.props.closeMessage}
        >
          X
        </label>
        <img className="message-text__round" alt="round" src={Round} width="400" height="400" />
        <div className="message-text__body-text">{this.props.openedMessageText}</div>
      </div>
    )
  }
}
