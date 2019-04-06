import React, {Component} from 'react';

import './message-list.css';
import Message from './message';

export default class MessageList extends Component{
  render() {
    return (
      <div className="message-list" id="messages">
        <input id="message-list__cutter" onChange="changeMessagePage(this)" type="checkbox" />
        <Message className="message__content" />

      </div>
      )
  }

};
