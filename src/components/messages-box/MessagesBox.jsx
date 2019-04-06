import React from 'react';
import './MessagesBox.css';
import * as utils from './message-templates';

export class MessagesBox extends React.Component {
  constructor(props) {
    super(props);
    this.newMail = this.newMail.bind(this);
    this.generateMessage = this.generateMessage.bind(this);
    this.getTimeForMessage = this.getTimeForMessage.bind(this);
    this.newMail();
    this.state = {
      wasNormalInterval: true,
      maxMessageInterval: 10 * 60 * 1000,
      timeMessageInterval: 5 * 60 * 1000,
      maxMessagePerPage: 30,
      messages: []
    };
  }

  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  getTimeForMessage() {
    let randomTime = MessagesBox.getRandomArbitrary(10, 10 * 60 * 1000);
    if (this.state.wasNormalInterval) {
      if (randomTime < this.state.timeMessageInterval) {
        this.setState({ wasNormalInterval: false });
      }
    } else {
      randomTime = MessagesBox.getRandomArbitrary(
        this.state.timeMessageInterval,
        this.state.maxMessageInterval
      );
      this.setState({ wasNormalInterval: true });
    }
    return randomTime;
  }

  async generateMessage(message) {
    /* if (this.state.messages.length >= this.state.maxMessagePerPage) {
      const lastMessageOnPageId = Array.from(localMessagesStorage.keys())[
        localMessagesStorage.size - maxMessagePerPage
      ];
      document.getElementById(lastMessageOnPageId).style.display = 'none';
    } */
    const id = new Date().getTime();
    message.id = id;

    const senderName = utils.getRandomSender();
    const [theme, text] = await utils.getRandomThemeAndText();
    // localMessagesStorage.set(id.toString(), text);

    message.appendChild(MessagesBox.generateInput());
    message.appendChild(document.createTextNode('\n'));
    message.appendChild(MessagesBox.generateSenderLogo(senderName[0]));
    message.appendChild(document.createTextNode('\n'));
    message.appendChild(MessagesBox.generateSenderDiv(senderName));
    message.appendChild(document.createTextNode('\n'));
    message.appendChild(MessagesBox.generateUnreadCircle());
    message.appendChild(document.createTextNode('\n'));
    message.appendChild(MessagesBox.generateThemeDiv(theme));
    message.appendChild(document.createTextNode('\n'));
    message.appendChild(MessagesBox.generateDateDiv());

    return message;
  }

  async newMail() {
    const timeForMessage = this.getTimeForMessage();
    const newGeneratedMessage = document.createElement('div');
    newGeneratedMessage.className = 'message';
    const newMessage = await this.generateMessage(newGeneratedMessage);
    /* newMessage.onclick = function() {
      openMessage(this, event);
    }; */
    newMessage.classList.add('add-message-animation');
    const newMessages = this.state.messages;
    newMessages.unshift(newMessage);
    this.setState({ messages: newMessages });
    // messagesContainer[0].insertBefore(newMessage, messagesContainer[0].firstChild);
    /* newMessage.addEventListener('animationend', () => {
      newMessage.classList.remove('add-message-animation');
    }); */
    // setTimeout(newMail, timeForMessage);
  }

  static generateDateDiv() {
    const today = new Date();
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('ru-RU', options);
    const date = document.createElement('div');
    date.className = 'message__date';
    date.innerText = formattedDate;
    return date;
  }

  static generateThemeDiv(theme) {
    const themeDiv = document.createElement('div');
    themeDiv.className = 'message__theme';
    themeDiv.innerText = theme;
    return themeDiv;
  }

  static generateSenderDiv(senderName) {
    const senderDiv = document.createElement('div');
    senderDiv.className = 'message__sender';
    senderDiv.innerText = `${senderName} `;
    return senderDiv;
  }

  static generateSenderLogo(firstSenderChar) {
    const senderLogoDiv = document.createElement('div');
    senderLogoDiv.classList.add('sender-img');
    senderLogoDiv.classList.add('message__sender-img');
    senderLogoDiv.textContent = firstSenderChar;
    return senderLogoDiv;
  }

  static generateInput() {
    const input = document.createElement('input');
    input.className = 'message__checkbox';
    input.type = 'checkbox';
    return input;
  }

  static generateUnreadCircle() {
    const unreadCircle = document.createElement('span');
    unreadCircle.className = 'message__unread-circle';
    return unreadCircle;
  }

  render() {
    return (
      <div className="messages-box">
        {this.state.messages.map(curMessage => {
          return curMessage;
        })}
      </div>
    );
  }
}
