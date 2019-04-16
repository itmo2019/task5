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
      isCheckAll: false
    };
    this.handleNewMessageClick = this.handleNewMessageClick.bind(this);
    this.selectAllAction = this.selectAllAction.bind(this);
    this.removeSelected = this.removeSelected.bind(this);
  }

  handleNewMessageClick() {
    const updatedCheckboxes = Object.assign({}, this.state.checkboxes);
    updatedCheckboxes[this.state.counter] = false;
    const message = Inbox.newMessageInfo(this.state.counter, updatedCheckboxes);
    this.setState(state => ({
      messages: [message, ...state.messages],
      checkboxes: updatedCheckboxes,
      counter: state.counter + 1,
      isCheckAll: false
    }));
  }

  selectAllAction() {
    const updatedCheckboxes = Object.assign({}, this.state.checkboxes);
    Object.keys(updatedCheckboxes).forEach(key => {
      updatedCheckboxes[key] = !this.state.isCheckAll;
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
    this.setState(() => ({
      messages: newArray,
      isCheckAll: false
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
            />
          ))}
        </div>
        <InboxFooter />
      </div>
    );
  }
}
