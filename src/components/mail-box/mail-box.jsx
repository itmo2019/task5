import React, { Component } from 'react';
import './mail-box.css';
import classNames from 'classnames';
import MultiRef from 'react-multi-ref';
import { LoremIpsum } from '@jsilvermist/lorem-ipsum-js';
import { Message } from '../message';

export class MailBox extends Component {
  static random(x, y) {
    const rnd = Math.random() * 2 - 1 + (Math.random() * 2 - 1) + (Math.random() * 2 - 1);
    return Math.round(Math.abs(rnd) * x + y);
  }

  constructor(props) {
    super(props);
    this.lorem = new LoremIpsum();
    this.addNewMessage = this.addNewMessage.bind(this);
    props.addNewMessage(this.addNewMessage);
    this.toggleMessages = this.toggleMessages.bind(this);
    this.state = {
      shownMessagesRefs: new MultiRef(),
      shownMessages: []
      // hiddenMessages: []
    };
    this.letterID = 0;
    this.MAX_LETTERS_NUMBER = 5;
  }

  generateName() {
    return this.lorem.words(1, 3).join(' ');
  }

  generateTopic() {
    return this.lorem.sentence(1, 10);
  }

  generateFullMessage() {
    const parNumbers = MailBox.random(4, 10);
    let i;
    const text = [];
    for (i = 0; i < parNumbers; i++) {
      text.push(this.lorem.paragraph(5, 40));
    }
    return text;
  }

  toggleMessages() {
    this.state.shownMessagesRefs.map.forEach(mes => {
      mes.toggleMessage();
    });
  }

  generateMessage(state) {
    return (
      <Message
        key={this.letterID}
        sender={this.generateName()}
        topic={this.generateTopic()}
        content={this.generateFullMessage()}
        toggleMessages={this.toggleMessages}
        ref={state.shownMessagesRefs.ref(this.letterID)}
      />
    );
  }

  addNewMessage() {
    this.setState(state => {
      const message = this.generateMessage(state);
      this.letterID++;
      state.shownMessages.unshift(message);
      if (state.shownMessages.length > this.MAX_LETTERS_NUMBER) {
        // state.hiddenMessages.push(state.shownMessages.pop());
        state.shownMessages.pop();
      }
      return { shownMessages: state.shownMessages };
    });
  }

  render() {
    return (
      <ul className={classNames('MailBox', this.props.className)}>{this.state.shownMessages}</ul>
    );
  }
}
