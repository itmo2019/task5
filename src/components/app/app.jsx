import React, { Component } from 'react';

import './app.css';
import { Header } from '../header/Header';
import { MainBlock } from '../main-block/MainBlock';
import { Menu } from '../menu/Menu';
import * as utils from './message-templates';

const maxMessageInterval = 10 * 60 * 1000;
const testMaxMessageInterval = 100;
const timeMessageInterval = 5 * 60 * 1000;
const maxMessagePerPage = 5;

export class App extends Component {
  static createMessageValues(
    id,
    theme,
    text,
    firstLetterSender,
    sender,
    date,
    isChecked,
    toCreate,
    toDelete,
    display
  ) {
    return {
      id,
      theme,
      text,
      firstLetterSender,
      sender,
      date,
      isChecked,
      toCreate,
      toDelete,
      display
    };
  }

  static getGeneratedDate() {
    const today = new Date();
    const options = { month: 'long', day: 'numeric' };
    return today.toLocaleDateString('ru-RU', options);
  }

  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  static async generateMessage() {
    const id = new Date().getTime();

    const senderName = utils.getRandomSender();
    const [theme, text] = await utils.getRandomThemeAndText();
    const date = App.getGeneratedDate();
    return App.createMessageValues(
      id,
      theme,
      text,
      senderName[0],
      senderName,
      date,
      false,
      false,
      false,
      true
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      wasNormalInterval: true
    };
    this.newMail = this.newMail.bind(this);
    this.deleteMessages = this.deleteMessages.bind(this);
    App.generateMessage = App.generateMessage.bind(this);
    this.getTimeForMessage = this.getTimeForMessage.bind(this);
    this.showHiddenMessages = this.showHiddenMessages.bind(this);
    const self = this;
    setTimeout(function callNewMail() {
      self.newMail();
    }, App.getRandomArbitrary(10, testMaxMessageInterval));
  }

  getTimeForMessage() {
    let randomTime = App.getRandomArbitrary(10, maxMessageInterval);
    if (this.state.wasNormalInterval) {
      if (randomTime < timeMessageInterval) {
        this.setState({ wasNormalInterval: false });
      }
    } else {
      randomTime = App.getRandomArbitrary(timeMessageInterval, maxMessageInterval);
      this.setState({ wasNormalInterval: true });
    }
    return randomTime;
  }

  checkboxHandler = id => {
    this.setState(prevState => {
      let i = -1;
      for (let k = 0; k < prevState.messages.length; k++) {
        const curMessage = prevState.messages[k];
        if (curMessage.id.toString() === id) {
          i = k;
          break;
        }
      }
      const newMessages = prevState.messages;
      newMessages[i].isChecked = !newMessages[i].isChecked;
      return { messages: newMessages };
    });
  };

  topBarCheckboxHandler = isChecked => {
    this.setState(prevState => {
      const newMessages = prevState.messages;
      for (let i = 0; i < Math.min(prevState.messages.length, maxMessagePerPage); i++) {
        newMessages[i] = prevState.messages[i];
        newMessages[i].isChecked = isChecked;
      }
      return { messages: newMessages };
    });
  };

  showHiddenMessages = messagesList => {
    let displayedNumber = 0;
    let i = 0;
    const showingMessagesList = messagesList;
    while (displayedNumber < maxMessagePerPage && i < showingMessagesList.length) {
      if (!showingMessagesList[i].toDelete) {
        displayedNumber++;
        showingMessagesList[i].display = true;
      }
      i++;
    }
    return showingMessagesList;
  };

  deleteMessages() {
    const messagesList = this.state.messages;
    for (let i = 0; i < messagesList.length; i++) {
      if (messagesList[i].isChecked) {
        messagesList[i].toDelete = true;
      }
    }
    this.setState({ messages: this.showHiddenMessages(messagesList) });
    setTimeout(() => {
      this.setState({
        messages: messagesList.filter(message => !message.isChecked)
      });
    }, 1000);
  }

  async newMail() {
    const timeForMessage = this.getTimeForMessage();
    const newMessage = await App.generateMessage();
    this.setState(prevState => {
      const newMessages = prevState.messages;
      if (newMessages.length >= maxMessagePerPage) {
        for (let i = maxMessagePerPage - 1; i < newMessages.length; i++) {
          newMessages[i].display = false;
        }
      }
      newMessages.unshift(newMessage);
      setTimeout(() => {
        newMessage.toCreate = true;
        this.setState({
          messages: newMessages
        });
      }, 10);
      return { messages: newMessages };
    });
    const self = this;
    setTimeout(function callNewMail() {
      self.newMail();
    }, timeForMessage);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Menu newMail={this.newMail} />
        <MainBlock
          messages={this.state.messages}
          deleteMessages={this.deleteMessages}
          checkboxHandler={this.checkboxHandler}
          topBarCheckboxHandler={this.topBarCheckboxHandler}
        />
      </div>
    );
  }
}
