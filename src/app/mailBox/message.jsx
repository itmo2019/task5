import React, { Component } from 'react';

import './message.css';

export class Message extends Component {
  constructor(props) {
    super(props);
    this.messageRef = React.createRef();
  }

  componentDidMount() {
    const messageNode = this.messageRef.current;
    const triggerAnimation = function() {
      messageNode.classList.add('message-snippet_added');
    };
    setTimeout(triggerAnimation, 0);
  }

  componentWillUnmount() {

  }

  render() {
    const message = this.props.message;
    return (
      <li
        onClick={this.props.messageClickHandler}
        ref={this.messageRef}
        className="message-snippet messages-list__message-snippet messages-snippet_bold"
      >
        <input
          className="message-snippet__part message-snippet__message-tick content_checkbox"
          type="checkbox"
        />
        <label className="message-clickable-area" htmlFor="message-click">
          <img
            className="message-snippet__part message-snippet__avatar"
            src={require(`../../static/avatars/${message.senderAvatar}`)}
            width="30"
            height="30"
            alt=""
          />
          <span className="message-snippet__part message-snippet__sender-name content_text-overflow_hidden">
            {message.senderName}
          </span>
          <div className="message-snippet__part message-snippet__message-item" />
          <span className="message-snippet__part message-snippet__message-topic content_text-overflow_hidden">
            {message.topic}
          </span>
          <time
            className="message-snippet__part message-snippet__message-time content_text-overflow_hidden"
            dateTime={message.machineTime}
          >
            {message.time}
          </time>
        </label>
      </li>
    );
  }
}
