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
    this.removeMessages = this.removeMessages.bind(this);
    props.removeMessages(this.removeMessages);
    this.toggleMessages = this.toggleMessages.bind(this);
    this.state = {
      shownMessagesRefs: new MultiRef(),
      shownMessages: [],
      hiddenMessages: []
    };
    this.letterID = 0;
    this.MAX_LETTERS_NUMBER = 20;
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

  generateMessage() {
    return (
      <Message
        key={this.letterID}
        sender={this.generateName()}
        topic={this.generateTopic()}
        content={this.generateFullMessage()}
        toggleMessages={this.toggleMessages}
        ref={this.state.shownMessagesRefs.ref(this.letterID)}
      />
    );
  }

  addNewMessage() {
    this.setState(state => {
      const message = this.generateMessage();
      this.letterID++;
      state.shownMessages.unshift(message);
      if (state.shownMessages.length > this.MAX_LETTERS_NUMBER) {
        const copy = state.shownMessages[state.shownMessages.length - 1];
        state.hiddenMessages.push(copy);
        state.shownMessages.pop();
      }
      return { shownMessages: state.shownMessages };
    });
  }

  addOldMessages(numRemoved) {
    this.setState(state => {
      const need = Math.min(numRemoved, this.state.hiddenMessages.length);
      let i;
      for (i = 0; i < need; i++) {
        const copy = this.state.hiddenMessages[this.state.hiddenMessages.length - 1];
        state.shownMessages.push(copy);
        state.hiddenMessages.pop();
      }
      return { shownMessages: state.shownMessages };
    });
  }

  removeMessages() {
    const unFiltered = this.state.shownMessages.filter(mes => {
      const k = Math.round(mes.key);
      const mesRef = this.state.shownMessagesRefs.map.get(k);
      return mesRef.state.isTicked;
    });

    unFiltered.forEach(mes => {
      const k = Math.round(mes.key);
      const mesRef = this.state.shownMessagesRefs.map.get(k);
      mesRef.fadeOutMessage();
    });

    setTimeout(
      () =>
        this.setState(state => {
          const filtered = state.shownMessages.filter(mes => {
            const k = Math.round(mes.key);
            const mesRef = state.shownMessagesRefs.map.get(k);
            return !mesRef.state.isTicked;
          });
          return { shownMessages: filtered };
        }),
      1000
    );
    setTimeout(() => this.addOldMessages(unFiltered.length), 1000);
  }

  render() {
    return (
      <ul className={classNames('MailBox', this.props.className)}>{this.state.shownMessages}</ul>
    );
  }
}
