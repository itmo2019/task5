import React, { Component } from 'react';
import './mail-box.css';
import classNames from 'classnames';
import { LoremIpsum } from '@jsilvermist/lorem-ipsum-js';
import { Message } from '../message';

export class MailBox extends Component {
  constructor(props) {
    super(props);
    this.lorem = new LoremIpsum();
    this.addNewMessage = this.addNewMessage.bind(this);
    props.addNewMessage(this.addNewMessage);
    // props.removeMessage(this.removeMessage);
    this.state = {
      shownMessages: []
      // hiddenMessages: []
    };
    this.letterID = 0;
    // this.MAX_LETTERS_NUMBER = 20;
  }

  generateName() {
    return this.lorem.words(1, 3).join(' ');
  }

  generateTopic() {
    return this.lorem.sentence(1, 10);
  }

  // generateHTMLText() {
  // const text = document.createElement('div');
  // text.className = 'full-message__text';
  // const parNumbers = LoremIpsum.random(4, 10);
  // let i;
  // for (i = 0; i < parNumbers; i++) {
  //   const paragraph = document.createElement('p');
  //   paragraph.innerText = this.lorem.paragraph(5, 40);
  //   text.appendChild(paragraph);
  // }
  // return text;
  // }

  generateMessage() {
    return (
      <Message key={this.letterID++} sender={this.generateName()} topic={this.generateTopic()} />
    );
  }

  addNewMessage() {
    this.setState(state => {
      state.shownMessages.unshift(this.generateMessage());
      return { shownMessages: state.shownMessages };
    });
  }

  render() {
    return (
      <ul className={classNames('MailBox', this.props.className)}>{this.state.shownMessages}</ul>
    );
  }
}
