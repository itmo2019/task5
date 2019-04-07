import React from 'react';
import './MessagesBox.css';
import * as utils from './message-templates';
import { Message } from '../message/Message';

const maxMessageInterval = 10 * 60 * 1000;
const testMaxMessageInterval = 100;
const timeMessageInterval = 5 * 60 * 1000;
const maxMessagePerPage = 30;

export class MessagesBox extends React.Component {
  static createMessageValues(id, theme, text, firstLetterSender, sender, date) {
    return { id, theme, text, firstLetterSender, sender, date };
  }

  static getGeneratedDate() {
    const today = new Date();
    const options = { month: 'long', day: 'numeric' };
    return today.toLocaleDateString('ru-RU', options);
  }

  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  constructor(props) {
    super(props);
    this.state = {
      wasNormalInterval: true,
      messages: []
    };
    this.newMail = this.newMail.bind(this);
    this.generateMessage = this.generateMessage.bind(this);
    this.getTimeForMessage = this.getTimeForMessage.bind(this);
    const self = this;
    setTimeout(function() {
      self.newMail();
    }, MessagesBox.getRandomArbitrary(10, testMaxMessageInterval));
  }

  getTimeForMessage() {
    let randomTime = MessagesBox.getRandomArbitrary(10, maxMessageInterval);
    if (this.state.wasNormalInterval) {
      if (randomTime < timeMessageInterval) {
        this.setState({ wasNormalInterval: false });
      }
    } else {
      randomTime = MessagesBox.getRandomArbitrary(timeMessageInterval, maxMessageInterval);
      this.setState({ wasNormalInterval: true });
    }
    return randomTime;
  }

  async generateMessage() {
    /* if (this.state.messages.length >= this.state.maxMessagePerPage) {
          const lastMessageOnPageId = Array.from(localMessagesStorage.keys())[
            localMessagesStorage.size - maxMessagePerPage
          ];
          document.getElementById(lastMessageOnPageId).style.display = 'none';
        } */
    const id = new Date().getTime();

    const senderName = utils.getRandomSender();
    const [theme, text] = await utils.getRandomThemeAndText();
    const date = MessagesBox.getGeneratedDate();
    // localMessagesStorage.set(id.toString(), text);
    return MessagesBox.createMessageValues(id, theme, text, senderName[0], senderName, date);
  }

  async newMail() {
    const timeForMessage = this.getTimeForMessage();
    const newMessage = await this.generateMessage();
    const newMessages = this.state.messages;
    newMessages.unshift(newMessage);
    this.setState({ messages: newMessages });
    const self = this;
    setTimeout(function() {
      self.newMail();
    }, timeForMessage);
  }

  render() {
    return (
      <div className="messages-box">
        {this.state.messages.map(messageData => {
          return <Message messageData={messageData} />;
        })}
      </div>
    );
  }
}
