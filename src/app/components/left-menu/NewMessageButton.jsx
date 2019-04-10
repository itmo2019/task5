import React, { Component } from 'react';

import '../../styles/left-menu/NewMessageButton.css';

export class NewMessageButton extends Component {
  render() {
    return (
      <button type="button" className="new-message-btn pressable-button">
        Написать
      </button>
    );
  }
}
