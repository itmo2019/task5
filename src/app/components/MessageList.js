import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

class MessageList extends Component {
  //id, author, theme, text, date
  render() {
    return (
      <div className={'message-block__message-list'}>

        {this.props.messages.map(message => (
          <MessageItem
            id = {message[0]}
            author = {message[1]}
            theme = {message[2]}
            text = {message[3]}
            date = {message[4]}
          />
        ))}
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default MessageList;
