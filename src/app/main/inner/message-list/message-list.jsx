import React, { Component } from 'react';

import './message-list.css';

export default class MessageList extends Component {
  render() {
    return (
      <div className="message-list" id="messages">
        <input id="message-list__cutter" type="checkbox" />
        <section className="message__content">
          <label htmlFor="message-list__cutter">
            <span className="message__close-button">✖</span>
          </label>
          <div className="message__page" />
        </section>
      </div>
    );
  }
}
