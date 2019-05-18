import React, { Component } from 'react';
import Header from './components/Header';
import './app.css';
import MainComponent from './components/MainComponent';
import json from '../letter';

export class App extends Component {
  state = {
    n: 4,
    k: 4,
    letterMap: new Map(),
    lettersGlobal: [],
    messages: [],
    textM: '',
    textClass: 'message-block__message-text_visible',
    messageListClass: 'message-block__message-list',
    mainChecked: true,
    smthToChange: false,
    messageOrText: true,
    filter: ''
  };

  componentDidMount() {
    this.state.lettersGlobal = json;

    setTimeout(this.sender.bind(this), 1000);
  }

  addMessage = () => {
    const letterNum = Math.floor(Math.random() * 29);
    this.addMessageToState(
      this.state.k - 1,
      'Фридрих Ницше',
      `Глава ${letterNum + 1}`,
      json[letterNum],
      '6 авг'
    );
    this.state.letterMap.set(this.state.k - 1, letterNum);
  };

  addMessageToState = (id1, author1, theme1, text1, date1) => {
    this.state.messages.push({
      id: id1,
      author: author1,
      theme: theme1,
      text: text1,
      date: date1,
      checked: false,
      deleted: false,
      animBefore: false,
      read: false
    });
  };

  sender = letters => {
    const r = Math.floor(Math.random() * 590 + 10);
    this.setState({ n: this.state.n + 1 });
    this.setState({ k: this.state.k + 1 });
    this.addMessage(json);
    const oldSmthToChange = this.state.smthToChange;
    this.setState({
      smthToChange: !oldSmthToChange
    });
    setTimeout(this.markAsAnimated, 500);
    setTimeout(this.sender.bind(this), 10000);
  };

  markAsAnimated = () => {
    this.state.messages.forEach(mes => {
      if (mes.id === (this.state.k - 1)) {
        mes.animBefore = true;
      }
    });
  };

  showMessage = id => {

    const newText = this.state.lettersGlobal[this.state.letterMap.get(id)];
    this.state.messages.forEach(mes => {
      if (mes.id === id) {
        mes.read = true;
      }
    });
    this.setState({
      messageOrText: false,
      textM: newText
    });
  };

  hideMessage = () => {
    this.setState({
      messageOrText: true
    });
  };

  deleteMessages = () => {
    const oldMessages = this.state.messages;
    this.state.messages.forEach(function(mes) {
      if (mes.checked) {
        mes.deleted = true;
      }
    });
    const oldSmthToChange = this.state.smthToChange;
    this.setState({
      smthToChange: !oldSmthToChange
    });
    setTimeout(this.deleteMessagesFromState, 1000)
  };

  deleteMessagesFromState = () => {
    const oldMessages = this.state.messages;
    this.setState({
      messages: oldMessages.filter(message => !message.checked)
    });
  };

  changeSelected = id => {
    this.state.messages.forEach(mes => {
      if (mes.id === id) {
        mes.checked = !mes.checked;
      }
    });
    const oldSmthToChange = this.state.smthToChange;
    this.setState({
      smthToChange: !oldSmthToChange
    });
  };

  setCheckBoxes = () => {
    let i = 0;
    const oldMainChecked = this.state.mainChecked;
    this.setState({
      mainChecked: !oldMainChecked
    });
    for (
      i = this.state.messages.length - 1;
      i >= Math.max(0, this.state.messages.length - 30 - 1);
      i--) {
      this.state.messages[i].checked = this.state.mainChecked;
    }
  };

  filterMessages = (req) => {
    this.setState({
      filter: req
    });
  };

  deleteFilter = () => {
    this.setState({
      filter: ''
    });
  };

  render() {
    return (
      <body className="mail_body">
      <Header
        filterMessages = {this.filterMessages}
        deleteFilter={this.deleteFilter}
      />
      <MainComponent
        messages={this.state.messages.filter(mes => mes.text.includes(this.state.filter))}
        changeSelected={this.changeSelected}
        hideMessage={this.hideMessage}
        text={this.state.textM}
        textClass={this.state.textClass}
        messageListClass={this.state.messageListClass}
        showMessage={this.showMessage}
        deleteMessages={this.deleteMessages}
        setCheckBoxes={this.setCheckBoxes}
        mainChecked={this.mainChecked}
        messageOrText={this.state.messageOrText}
      />
      </body>
    );
  }
}
