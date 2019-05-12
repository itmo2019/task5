import React, { Component } from 'react';

import './controlPanelButton.css';

export class ControlPanelButton extends Component {
  render() {
    return (
      <div className="letters__control-panel-button">
        <a href="#" className="mails-control-panel__link" onClick={this.props.onClick}>
          {this.props.name}
        </a>
      </div>
    );
  }
}
