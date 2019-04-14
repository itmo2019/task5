import React, { Component } from 'react';

import './inbox__messages.css';
import { InboxMessage } from './inbox-message';

import authorAvatar from '../../../img/ya-default.svg';

export class InboxMessages extends Component {
  render() {
    return (
      <div className="inbox__messages" id="messages">
        <InboxMessage authorImg={authorAvatar} />
        <InboxMessage authorImg={authorAvatar} />
        <InboxMessage authorImg={authorAvatar} />
        <InboxMessage authorImg={authorAvatar} />
      </div>
    );
  }
}
