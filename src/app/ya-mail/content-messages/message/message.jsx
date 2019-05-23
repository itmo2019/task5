import React, { Component } from 'react';

import './message.css';

import MessageLogo from '../../../../images/ya-message-logo.svg';

export class Message extends Component {
  render() {
    const addAnimation = this.props.message.addAnimation ? ' create_animation' : '';
    const deleteAnimation = this.props.message.deleteAnimation ? ' delete_animation' : '';
    return (
      <li
        className={`message message_unread content-messages__message${addAnimation}${deleteAnimation}`}
      >
        <input
          type="checkbox"
          checked={this.props.message.selected}
          className="message__elem message__message-select page_checkbox"
          onChange={() => this.props.selectCheckBox(this.props.messageIndex)}
        />
        <label
          className="message-open"
          htmlFor="message-select1"
          onClick={() => this.props.openMessage(this.props.message)}
          >
          <img
            className="message__elem message__author-avatar"
            alt=""
            src={MessageLogo}
            width="30px"
            height="30px"
          />
          <span className="message__elem message__author-name page_text-overflow_hide">
            {this.props.message.messageAuthor}
          </span>
          <div className="message__elem message__mark-as-read-tick" />
          <span className="message__elem message__message-subject page_text-overflow_hide">
            {this.props.message.messageSubject}
          </span>
          <time className="message__elem message__message-receive-time page_text-overflow_hide">
            {this.props.message.messageDate}
          </time>
        </label>
      </li>
    );
  }
}
