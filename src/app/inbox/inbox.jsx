import React, { Component } from 'react';
import { InboxLetter } from './__letter/inbox-letter';
import { InboxHeader } from './__header/inbox-header';
import { InboxFooter } from './__footer/inbox-footer';
import { getRandomFromRange, LoremIpsum } from '../util';
import { InboxMessage } from './__messages/inbox-message';

import './inbox.css';
import './__messages/inbox__messages.css';
import authorAvatar from '../../img/ya-default.svg';

export class Inbox extends Component {
  static newMessageInfo(counter) {
    return {
      img: authorAvatar,
      key: `message_${counter}`,
      id: counter,
      author: `Котик #${getRandomFromRange(0, 1000)} из Яндекса`,
      message: new LoremIpsum().paragraph(50, 100),
      checked: false,
      display: true,
      read: false
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      // TODO: it's better to use TreeMap here.
      messages: [],
      counter: 0,
      isCheckAll: false,
      isLetterDisplayed: false,
      letterContent: '',
      headerDisabled: false
    };
    this.maxPageMessages = 10;
    this.handleNewMessageClick = this.handleNewMessageClick.bind(this);
    this.selectAllMessages = this.selectAllMessages.bind(this);
    this.removeSelected = this.removeSelected.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
    this.openLetter = this.openLetter.bind(this);
  }

  handleNewMessageClick() {
    const updatedMessages = this.state.messages.slice();
    for (let i = 0; i < updatedMessages.length; i++) {
      updatedMessages[i].display = i < this.maxPageMessages - 1;
    }
    const message = Inbox.newMessageInfo(this.state.counter);
    this.setState(state => ({
      messages: [message, ...updatedMessages],
      counter: state.counter + 1,
      isCheckAll: false
    }));
  }

  selectAllMessages() {
    const updatedMessages = this.state.messages.slice();
    const newValue = this.state.isCheckAll;
    for (const message of updatedMessages) {
      message.checked = message.display && !newValue;
    }
    this.setState(state => ({
      isCheckAll: !state.isCheckAll,
      messages: updatedMessages
    }));
  }

  selectCheckbox(id) {
    const updatedMessages = this.state.messages.slice();
    for (const message of updatedMessages) {
      if (message.id === id) {
        message.checked = !message.checked;
        break;
      }
    }
    this.setState(() => ({
      messages: updatedMessages
    }));
  }

  removeSelected() {
    const newArray = [];
    this.state.messages.forEach(message => {
      if (!message.checked) {
        newArray.push(message);
      }
    });
    for (let i = 0; i < Math.min(newArray.length, this.maxPageMessages); i++) {
      newArray[i].display = true;
    }
    this.setState(() => ({
      messages: newArray,
      isCheckAll: false
    }));
  }

  markAsRead() {
    const updatedMessages = this.state.messages.slice();
    for (const message of updatedMessages) {
      if (message.checked) {
        message.read = true;
      }
    }
    this.setState(() => ({
      messages: updatedMessages
    }));
  }

  openLetter(id) {
    let messageContent = null;
    const updatedMessages = this.state.messages.slice();
    for (const message of updatedMessages) {
      if (message.id === id) {
        messageContent = message.message;
        message.read = true;
      }
    }
    this.setState(() => ({
      isLetterDisplayed: true,
      letterContent: messageContent,
      headerDisabled: true,
      messages: updatedMessages,
      isCheckAll: false
    }));
  }

  render() {
    return (
      <div className="inbox">
        <InboxHeader
          handleNewMessageClick={this.handleNewMessageClick}
          isChecked={this.state.isCheckAll}
          onCheckAction={this.selectAllMessages}
          removeSelected={this.removeSelected}
          markAsRead={this.markAsRead}
          disabled={this.state.headerDisabled}
        />
        <div className="inbox__messages" id="messages">
          {this.state.messages.map(message => (
            <InboxMessage
              img={message.img}
              key={message.key}
              id={message.id}
              author={message.author}
              message={message.message}
              isChecked={message.checked}
              onCheckAction={() => {
                this.setState(() => ({
                  isCheckAll: false
                }));
                this.selectCheckbox(message.id);
              }}
              display={message.display}
              read={message.read}
              openLetter={this.openLetter}
            />
          ))}
        </div>
        <InboxLetter
          display={this.state.isLetterDisplayed}
          content={this.state.letterContent}
          closeLetter={() => {
            this.setState(() => ({
              headerDisabled: false,
              isLetterDisplayed: false
            }));
          }}
        />
        <InboxFooter />
      </div>
    );
  }
}
