import React, { Component } from 'react';

import './inbox.css';
import { getRandomFromRange, LoremIpsum } from '../util';
import { InboxHeader } from './__header/inbox-header';
import { InboxFooter } from './__footer/inbox-footer';

import './__messages/inbox__messages.css';
import { InboxMessage } from './__messages/inbox-message';

import authorAvatar from '../../img/ya-default.svg';

export class Inbox extends Component {
  static newMessageInfo(counter) {
    return {
      img: authorAvatar,
      key: `message_${counter}`,
      id: counter,
      author: `Котик #${getRandomFromRange(0, 1000)} из Яндекса`,
      message: new LoremIpsum().paragraph(50, 100)
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      counter: 0,
      checkboxes: {},
      isCheckAll: false,
      displayed: {},
      read: {}
    };
    this.maxPageMessages = 5;
    this.handleNewMessageClick = this.handleNewMessageClick.bind(this);
    this.selectAllAction = this.selectAllAction.bind(this);
    this.removeSelected = this.removeSelected.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleNewMessageClick() {
    const updatedCheckboxes = Object.assign({}, this.state.checkboxes);
    updatedCheckboxes[this.state.counter] = false;
    const updatedRead = Object.assign({}, this.state.read);
    updatedRead[this.state.counter] = false;
    const updatedDisplayed = Object.assign({}, this.state.displayed);
    for (let i = 0; i < this.state.messages.length; i++) {
      const { id } = this.state.messages[i];
      updatedDisplayed[id] = i < this.maxPageMessages - 1;
    }
    updatedDisplayed[this.state.counter] = true;
    const message = Inbox.newMessageInfo(this.state.counter, updatedCheckboxes);
    this.setState(state => ({
      messages: [message, ...state.messages],
      checkboxes: updatedCheckboxes,
      counter: state.counter + 1,
      isCheckAll: false,
      displayed: updatedDisplayed,
      read: updatedRead
    }));
  }

  selectAllAction() {
    const updatedCheckboxes = Object.assign({}, this.state.checkboxes);
    Object.keys(updatedCheckboxes).forEach(key => {
      if (this.state.displayed[key]) {
        updatedCheckboxes[key] = !this.state.isCheckAll;
      }
    });
    this.setState(state => ({
      isCheckAll: !state.isCheckAll,
      checkboxes: updatedCheckboxes
    }));
  }

  selectCheckbox(id) {
    const updatedCheckboxes = Object.assign({}, this.state.checkboxes);
    updatedCheckboxes[id] = !updatedCheckboxes[id];
    this.setState(() => ({
      checkboxes: updatedCheckboxes
    }));
  }

  removeSelected() {
    const newArray = [];
    this.state.messages.forEach(message => {
      if (!this.state.checkboxes[message.id]) {
        newArray.push(message);
      }
    });
    const updatedDisplayed = Object.assign({}, this.state.displayed);
    for (let i = 0; i < Math.min(newArray.length, this.maxPageMessages); i++) {
      const { id } = newArray[i];
      updatedDisplayed[id] = true;
    }
    this.setState(() => ({
      messages: newArray,
      isCheckAll: false,
      displayed: updatedDisplayed
    }));
  }

  markAsRead() {
    const updatedRead = Object.assign({}, this.state.read);
    for (let i = 0; i < Math.min(this.state.messages.length, this.maxPageMessages); i++) {
      const { id } = this.state.messages[i];
      if (this.state.checkboxes[id]) {
        updatedRead[id] = true;
      }
    }
    this.setState(() => ({
      read: updatedRead
    }));
  }

  render() {
    return (
      <div className="inbox">
        <InboxHeader
          handleNewMessageClick={this.handleNewMessageClick}
          isChecked={this.state.isCheckAll}
          onCheckAction={this.selectAllAction}
          removeSelected={this.removeSelected}
          markAsRead={this.markAsRead}
        />
        <div className="inbox__messages" id="messages">
          {this.state.messages.map(message => (
            <InboxMessage
              img={message.img}
              key={message.key}
              id={message.id}
              author={message.author}
              message={message.message}
              isChecked={this.state.checkboxes[message.id]}
              onCheckAction={() => {
                this.setState(() => ({
                  isCheckAll: false
                }));
                this.selectCheckbox(message.id);
              }}
              display={this.state.displayed[message.id]}
              read={this.state.read[message.id]}
            />
          ))}
        </div>
        <InboxFooter />
      </div>
    );
  }
}
