import React, { Component } from 'react';

import './inbox__messages.css';

export class InboxMessages extends Component {
  render() {
    return (
      <div className="inbox__messages" id="messages">
        {this.props.messages}
      </div>
    );
  }
}
