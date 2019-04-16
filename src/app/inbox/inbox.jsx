import React, { Component } from 'react';

import './inbox.css';
import { getRandomFromRange, LoremIpsum } from '../util';
import { InboxHeader } from './__header/inbox-header';
import { InboxFooter } from './__footer/inbox-footer';
import { InboxMessages } from './__messages/inbox-messages';
import { InboxMessage } from './__messages/inbox-message';

import authorAvatar from '../../img/ya-default.svg';

export class Inbox extends Component {
  static newMessage(id) {
    return (
      <InboxMessage
        img={authorAvatar}
        key={`message_${id}`}
        id={id}
        author={`Котик #${getRandomFromRange(0, 1000)} из Яндекса`}
        message={new LoremIpsum().paragraph(50, 100)}
      />
    );
  }

  constructor(props) {
    super(props);
    this.state = { messages: [], counter: 0 };
    this.handleNewMessageClick = this.handleNewMessageClick.bind(this);
  }

  handleNewMessageClick() {
    this.setState(state => ({
      messages: [...state.messages, Inbox.newMessage(state.counter)],
      counter: state.counter + 1
    }));
  }

  render() {
    return (
      <div className="inbox">
        <InboxHeader handleNewMessageClick={this.handleNewMessageClick} />
        <InboxMessages messages={this.state.messages} />
        <InboxFooter />
      </div>
    );
  }
}
