import React from 'react';

import Message from './message';
import './message-list.css';

export default class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openedMessageId: null,
      isMessageOpen: false
    };
  }

  onOpenedMessageId(id) {
    this.setState({
      isMessageOpen: true,
      openedMessageId: id
    });
  }

  onCloseMessage() {
    this.setState({
      isMessageOpen: false,
      openedMessageId: null
    });
  }

  render() {
    return !this.state.isMessageOpen ? (
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
              onChangeCheckBox={this.props.onChangeCheckBox}
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
          <div className="message__page">
            <p>От кого: {this.props.messages[this.state.openedMessageId].contact}</p>
            <p>{this.props.messages[this.state.openedMessageId].text}</p>
          </div>
        </section>
      </div>
    );
  }
}
