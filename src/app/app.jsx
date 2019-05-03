import React, { Component } from 'react';

import './app.css';

import Header from '../header/header';
import MainBlock from '../main-block/main-block';

export class App extends Component {
  constructor(props) {
    super(props);
    this.newMail = this.newMail.bind(this);
    this.deleteSelectedMessages = this.deleteSelectedMessages.bind(this);

    this.createAndRandom = this.createAndRandom.bind(this);
    this.newRandomMessage = this.newRandomMessage.bind(this);
    this.buildNewMessage = this.buildNewMessage.bind(this);

    this.messagesPerPage = 30;
    this.overflowMessages = [];

    this.timeoutUpper = 10 * 60 * 1000;
    this.timeoutLower = 5 * 60 * 1000;

    this.senders = ['Петя', 'Вася', 'Маша'];
    this.subjects = ['Привет из России', 'Hello from England', 'Bonjour de France'];
    this.texts = ['Привет!', 'Hello!', 'Bonjour!'];
    this.months = [
      'январь',
      'февраль',
      'март',
      'апрель',
      'май',
      'июнь',
      'июль',
      'август',
      'сентябрь',
      'октябрь',
      'ноябрь',
      'декабрь'
    ];

    this.state = {
      messagesList: []
    };
  }

  componentDidMount() {
    const thisHolder = this;
    thisHolder.createAndRandom();
  }

  createAndRandom() {
    this.newMail();
    this.newRandomMessage();
  }

  newRandomMessage() {
    setTimeout(
      this.createAndRandom,
      Math.random() * (this.timeoutUpper - this.timeoutLower) + this.timeoutLower
    );
  }

  newMail() {
    this.setState(prevState => {
      const newMessagesList = prevState.messagesList;
      const newOverflowMessages = this.overflowMessages;

      let newMessagesListActualSize = 0;
      for (let index = 0; index < newMessagesList.length; index++) {
        if (!newMessagesList[index].shrink) {
          newMessagesListActualSize++;
        }
      }

      while (newMessagesListActualSize >= this.messagesPerPage) {
        for (let index = newMessagesList.length - 1; index >= 0; index--) {
          const message = newMessagesList[index];
          if (!message.shrink) {
            message.shrink = true;
            message.selected = false;
            newMessagesListActualSize--;
            newOverflowMessages.push(message);
            setTimeout(() => {
              const removeIndex = newMessagesList.indexOf(message);
              if (removeIndex > -1 && newMessagesList[removeIndex].shrink) {
                newMessagesList.splice(removeIndex, 1);
                message.shrink = false;
              }
            }, 1500);
            break;
          }
        }
      }
      const newMessage = this.buildNewMessage();

      newMessagesList.unshift(newMessage);

      setTimeout(() => {
        newMessage.unshrink = true;
        this.setState({
          messagesList: newMessagesList
        });
      }, 50);

      this.overflowMessages = newOverflowMessages;
      return {
        messagesList: newMessagesList
      };
    });
  }

  deleteSelectedMessages() {
    this.setState(prevState => {
      const newMessagesList = prevState.messagesList;
      const newOverflowMessages = this.overflowMessages;

      for (let index = 0; index < newMessagesList.length; index++) {
        const message = newMessagesList[index];
        if (message.selected) {
          if (!message.shrink) {
            message.shrink = true;
            message.unshrink = false;
            if (newOverflowMessages.length > 0) {
              const newMessage = newOverflowMessages.pop();
              let needToPush = true;
              for (let i = 0; i < newMessagesList.length; i++) {
                if (newMessagesList[i].id === newMessage.id) {
                  needToPush = false;
                  break;
                }
              }
              newMessage.shrink = false;
              if (!needToPush) {
                newMessage.unshrink = true;
              } else {
                newMessage.unshrink = false;
                setTimeout(() => {
                  newMessage.unshrink = true;
                  this.setState({
                    messagesList: newMessagesList
                  });
                }, 50);
                newMessagesList.push(newMessage);
              }
            }
          }
        }
      }

      this.overflowMessages = newOverflowMessages;
      return {
        messagesList: newMessagesList
      };
    });

    setTimeout(() => {
      this.setState(prevState => {
        return {
          messagesList: prevState.messagesList.filter(message => !message.shrink)
        };
      });
    }, 1500);
  }

  buildNewMessage() {
    const currentDate = new Date();

    const id = currentDate.getTime();
    const langInd = Math.floor(Math.random() * this.senders.length);
    const hiddenText = this.texts[langInd];

    const monthInd = currentDate.getMonth().toLocaleString('rus');
    const month = this.months[monthInd];
    const day = currentDate.getDate();

    const senderName = this.senders[Math.floor(Math.random() * this.senders.length)];
    return {
      id,
      senderName,
      senderLogo: senderName[0],
      subject: this.subjects[langInd],
      date: `${day} ${month.substr(0, 3)}`,
      hiddenText,
      selected: false,
      shrink: false,
      unshrink: false
    };
  }

  render() {
    return (
      <div className="app">
        <Header newMailFunction={this.newMail} />
        <MainBlock
          deleteSelected={this.deleteSelectedMessages}
          messagesList={this.state.messagesList}
        />
      </div>
    );
  }
}
