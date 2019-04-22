import React from 'react';

import Message from './message';
import './message-list.css';

export default class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openedMessageId: null
    };
  }

  onOpenedMessageId(id) {
    this.setState({
      openedMessageId: id
    });
  }

  onCloseMessage() {
    this.setState({
      openedMessageId: null
    });
  }

  render() {
    return !this.state.openedMessageId ? (
      <div className="message-list">
        {this.props.messages.map(message => {
          return (
            <Message
              key={message.id}
              messageId={message.id}
              isChecked={message.isChecked}
              image={message.image}
              contact={message.contact}
              subject={message.text}
              handleOpen={this.onOpenedMessageId.bind(this)}
              isRead={message.isRead}
              date={message.date}
              onClick={this.props.onClick}
            />
          );
        })}
      </div>
    ) : (
      <div className="message-list">
        <section className="message__content">
          <button
            className="message__close-button"
            type="button"
            onClick={this.onCloseMessage.bind(this)}
          >
            ✖
          </button>
          {this.props.messages.map(message => {
            return (
              <div key={this.state.openedMessageId} className="message__page">
                <p>От кого: {message.contact}</p>
                <p>{message.text}</p>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
