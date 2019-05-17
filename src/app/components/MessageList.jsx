import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

class MessageList extends Component {
  render() {
    return (
      <div className={this.props.messageListClass}>
        {this.props.messages.slice(0).reverse().map(message => {
          return (
            <MessageItem
              id={message.id}
              key={message.id}
              author={message.author}
              theme={message.theme}
              text={message.text}
              date={message.date}
              selected={message.checked}
              changeSelected={this.props.changeSelected}
              showMessage={this.props.showMessage}
              deleted={message.deleted}
            />
          );
        })}
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  changeSelected: PropTypes.func.isRequired,
  messageListClass: PropTypes.object.isRequired,
  showMessage: PropTypes.func.isRequired
};

export default MessageList;
