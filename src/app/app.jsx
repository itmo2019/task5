import React, { Component } from 'react';

import './app.css';

import Header from '../header/header';
import MainBlock from '../main-block/main-block';

export class App extends Component {

  constructor(props) {
    super(props);
    this.newMail = this.newMail.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deleteSelectedMessages = this.deleteSelectedMessages.bind(this);
    this.closeMessage = this.closeMessage.bind(this);

    this.createAndRandom = this.createAndRandom.bind(this);
    this.newRandomMessage = this.newRandomMessage.bind(this);
    this.selectCheckbox = this.selectCheckbox.bind(this);
    this.openMessage = this.openMessage.bind(this);
    this.buildNewMessage = this.buildNewMessage.bind(this);

    this.state = {
      senders : ["Петя", "Вася", "Маша"],
      subjects : ["Привет из России", "Hello from England", "Bonjour de France"],
      texts : ["Привет!", "Hello!", "Bonjour!"],
      months : ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],

      anyCheckboxIsActive : false,
      idToHtmlMap : new Map(),
      messagesPerPage : 30,
      overflowMessages : [],
      messagesListActualSize : 0,

      timeoutUpper : 10 * 60 * 1000,
      timeoutLower : 5 * 60 * 1000,
  }

    // this.createAndRandom();
  }

  createAndRandom() {
    this.newMail();
    this.newRandomMessage();
  }

  newRandomMessage() {
    setTimeout(this.createAndRandom, Math.random() * (this.state.timeoutUpper - this.state.timeoutLower) + this.state.timeoutLower);
  }

  newMail() {
    let messagesList = document.querySelector('.messages-list');
    while (this.state.messagesListActualSize >= this.state.messagesPerPage) {
      for (let index = messagesList.children.length - 1; index >= 0; index--) {
        let message = messagesList.children[index];
        if (message.classList.contains('to-delete')) {
          continue;
        }
        message.classList.add("to-delete");
        this.state.messagesListActualSize--;
        this.state.overflowMessages.push(message);
        setTimeout(() => {
          if (message.classList.contains('to-delete')) {
            messagesList.removeChild(message);
            message.classList.remove('to-delete');
          }
        }, 1500);
        break;
      }
    }
    let newMessage = this.buildNewMessage();

    this.state.messagesListActualSize++;
    messagesList.insertBefore(newMessage, messagesList.children[0]);

    setTimeout(() => {
      newMessage.classList.remove("to-create");
    }, 50);
  }

  selectCheckbox(checkboxId) {
    let checkbox = document.getElementById(checkboxId)

    window.event.stopPropagation();

    if (checkbox.checked) {
      if (!this.state.anyCheckboxIsActive) {
        let deleteButton = document.getElementById('delete-messages');
        deleteButton.classList.add('cursor-pointer');
      }
      this.state.anyCheckboxIsActive = true;
    } else {
      let checkboxes = document.getElementsByClassName('select-message__checkbox');
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          return;
        }
      }
      this.state.anyCheckboxIsActive = false;
      let deleteButton = document.getElementById('delete-messages');
      deleteButton.classList.remove('cursor-pointer');
    }
  }

  selectAll() {
    let selectAllCheckbox = document.getElementById('select-all');
    let checkboxes = document.getElementsByClassName('select-message__checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].parentElement.parentElement.classList.contains('to-delete')) {
        continue;
      }
      checkboxes[i].checked = selectAllCheckbox.checked;
    }
    this.state.anyCheckboxIsActive = selectAllCheckbox.checked;

    let deleteButton = document.getElementById('delete-messages');
    if (!this.state.anyCheckboxIsActive) {
      deleteButton.classList.remove('cursor-pointer');
    } else {
      deleteButton.classList.add('cursor-pointer');
    }
  }

  deleteSelectedMessages() {
    let checkboxes = document.getElementsByClassName('select-message__checkbox');
    let messagesList = document.querySelector('.messages-list');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        let message = checkboxes[i].parentElement.parentElement;
        if (message.classList.contains('to-delete')) {
          continue;
        }

        message.classList.add("to-delete");
        this.state.messagesListActualSize--;
        setTimeout(() => {
          messagesList.removeChild(message);
        }, 1500);
        if (this.state.overflowMessages.length > 0) {
          let newMessage = this.state.overflowMessages.pop();
          if (newMessage.classList.contains('to-delete')) {
            newMessage.classList.remove('to-delete');
          } else {
            messagesList.appendChild(newMessage);
          }
          newMessage.classList.add('to-create');
          this.state.messagesListActualSize++;
          setTimeout(() => {
            newMessage.classList.remove("to-create");
          }, 50);
        }
      }
    }
    this.state.anyCheckboxIsActive = false;
    document.getElementById('check-all').checked = false;
    let deleteButton = document.getElementById('delete-messages');
    deleteButton.classList.remove('cursor-pointer');
  }

  openMessage(messageId) {
    let hiddenMessage = document.querySelector('.hidden-message');
    let hiddenMessageContent = document.querySelector('.hidden-message__content');
    let messagesList = document.querySelector('.messages-list');

    let hiddenHtml = this.state.idToHtmlMap.get(messageId);

    hiddenMessageContent.innerHTML = '';
    hiddenMessageContent.appendChild(hiddenHtml);

    messagesList.style.display = "none";
    hiddenMessage.style.display = "block";
  }

  closeMessage() {
    let hiddenMessage = document.querySelector('.hidden-message');
    let messagesList = document.querySelector('.messages-list');

    hiddenMessage.style.display = "none";
    messagesList.style.display = "block";
  }

  buildNewMessage() {
    let currentDate = new Date();

    let id = currentDate.getTime();
    let hiddenHtml = document.createElement('div');
    hiddenHtml.classList.add('hidden-message__text');
    let langInd = Math.floor(Math.random() * this.state.senders.length);
    hiddenHtml.textContent = this.state.texts[langInd];

    this.state.idToHtmlMap.set(id.toString(), hiddenHtml);

    let templateClone = document.importNode(document.querySelector('#message-template').content, true);

    // console.log(document.querySelector('#message-template').content);
    // console.log(document.querySelector('#message-template').innerHTML);
    // console.log(document.importNode(document.querySelector('#message-template').content, true));
    // console.log(document.importNode(document.querySelector('#message-template').content, true).content);
    // console.log(templateClone.querySelectorAll('.message'));

    let newMessage = templateClone.querySelector('.message');
    newMessage.id = id;

    let checkboxLabel = newMessage.querySelector('.select-message__checkbox-label');
    checkboxLabel.setAttribute('for', 'checkbox-' + id);
    checkboxLabel.onclick = function () {
      window.event.stopPropagation();
    };

    let checkbox = newMessage.querySelector('.select-message__checkbox');
    checkbox.onclick = function () {
      this.selectCheckbox('checkbox-' + id);
    };
    checkbox.setAttribute('id', 'checkbox-' + id);

    let senderName = this.state.senders[Math.floor(Math.random() * this.state.senders.length)];

    let senderLogo = newMessage.querySelector('.message-info__sender-logo');
    senderLogo.textContent = senderName[0];

    let sender = newMessage.querySelector('.message-info__sender');
    sender.textContent = senderName;

    let subject = newMessage.querySelector('.message-info__subject');
    subject.textContent = this.state.subjects[langInd];

    let monthInd = currentDate.getMonth().toLocaleString('rus');
    let month = this.state.months[monthInd];
    let day = currentDate.getDate();

    let date = newMessage.querySelector('.date-container__date');
    date.textContent = day + ' ' + month.substr(0, 3);

    newMessage.onclick = function () {
      this.openMessage(id);
    };
    return newMessage;
  }

  render() {
    return (
      <div className="app">
        <Header newMailFunction={this.newMail}/>
        <MainBlock selectAll={this.selectAll} deleteSelected={this.deleteSelectedMessages} closeMessage={this.closeMessage}/>
      </div>
    );
  }
}
