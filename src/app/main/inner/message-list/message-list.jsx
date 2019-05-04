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
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  openMessage(id) {
    this.setState({
      isMessageOpen: true,
      openedMessageId: id
    });
  }

  closeMessage() {
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
              isChecked={this.props.isCheckedIdList[message.id]}
              image={message.image}
              contact={message.contact}
              subject={message.text}
              openMessage={this.openMessage}
              isRead={message.isRead}
              date={message.date}
              handleCheckBoxClick={this.props.handleCheckBoxClick}
            />
          );
        })}
      </div>
    ) : (
      <div className="message-list">
        <section className="message__content">
          <button className="message__close-button" type="button" onClick={this.closeMessage}>
            ✖
          </button>
          <div className="message__page">
            <p>
              От кого:{' '}
              {this.props.messages.find(mess => mess.id === this.state.openedMessageId).contact}
            </p>
            <p>{this.props.messages.find(mess => mess.id === this.state.openedMessageId).text}</p>
          </div>
        </section>
      </div>
    );
  }
}
