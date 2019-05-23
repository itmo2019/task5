import React, { Component } from 'react';

import './content-messages.css';

import { MessageText } from './message-text/message-text';
import { Message } from './message/message';

export class ContentMessages extends Component {
  constructor(props) {
    super(props);
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);

    this.state = {
      openedMessageText: this.props.openedMessageText,
      messageIsOpen: false
    };
  }

  closeMessage() {
    this.setState({
      messageIsOpen: false
    });
  }

  openMessage(message) {
    this.setState({
      messageIsOpen: true,
      openedMessageText: message.messageText
    });
  }

  render() {
    const hidenClass = this.state.messageIsOpen ? ' page_visibility_hide' : '';
    return (
      <div className="content-messages ya-mail__content-messages">
        <div className="content-messages__message-body">
          <input type="checkbox" id="message-select1" />
          <MessageText
            closeMessage={this.closeMessage}
            messageIsOpen={this.state.messageIsOpen}
            openedMessageText={this.state.openedMessageText}
          />
        </div>
        <ul className={`content-messages__message-list${hidenClass}`}>
          {this.props.messageList.map((message, messageIndex) => {
            return (
              <Message
                message={message}
                openMessage={this.openMessage}
                key={message.id}
                messageIndex={messageIndex}
                selectCheckBox={this.props.selectCheckBox}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
