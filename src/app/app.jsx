import React, { Component } from 'react';

import './app.css';

import { Header } from './header/header';
import { YaSideBar } from './ya-sidebar/ya-sidebar';
import { YaMail } from './ya-mail/ya-mail';

export class App extends Component {
  constructor(props) {
    super(props);
    this.createMessage = this.createMessage.bind(this);
    this.buildMessage = this.buildMessage.bind(this);
    this.deleteSelected = this.deleteSelected.bind(this);
    this.selectCheckBox = this.selectCheckBox.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.newMailTime = this.newMailTime.bind(this);
    this.setNextRand = this.setNextRand.bind(this);

    this.authors = ['Антон', 'Саша', 'Алексей'];
    this.subject = ['Путешествие', 'Стажировка', 'Виза'];
    this.text = [
      'Когда планируема дата вашего приезда ?',
      'Где вы собираетесь оставаться ?',
      'Ты опоздал с дедлайном'
    ];
    this.dates = ['1 янв', '2 фев', '3 март', '4 апр', '5 авг'];

    this.minTime = 10;
    this.maxTime = 1000 * 60 * 10 - this.minTime;

    this.state = {
      messageList: []
    };
  }

  componentDidMount() {
    this.newMailTime();
  }

  newMailTime() {
    this.createMessage();
    this.setNextRand();
  }

  setNextRand() {
    setTimeout(this.newMailTime, Math.random() * this.maxTime + this.minTime);
  }

  buildMessage() {
    const id = new Date().getTime();
    const messageText = this.text[Math.floor(Math.random() * this.text.length)];
    const messageAuthor = this.authors[Math.floor(Math.random() * this.authors.length)];
    const messageSubject = this.subject[Math.floor(Math.random() * this.subject.length)];
    const messageDate = this.dates[Math.floor(Math.random() * this.dates.length)];
    return {
      id,
      messageAuthor,
      messageSubject,
      messageDate,
      messageText,
      selected: false,
      addAnimation: true,
      deleteAnimation: false
    };
  }

  createMessage() {
    this.setState(prevState => {
      const newMessageList = prevState.messageList;
      if (prevState.messageList.length >= 30) {
        return {
          messageList: newMessageList
        };
      }
      const newMessage = this.buildMessage();
      const curId = newMessage.id;
      setTimeout(() => {
        this.setState(prevSt => {
          return prevSt.messageList.map(message => {
            if (message.id === curId) {
              const updMessage = message;
              updMessage.addAnimation = false;
              return updMessage;
            }
            return message;
          });
        });
      }, 1500);
      newMessageList.unshift(newMessage);
      return {
        messageList: newMessageList
      };
    });
  }

  deleteSelected() {
    this.setState(prevState => {
      return {
        messageList: prevState.messageList.map(message => {
          if (message.selected) {
            const updMessage = message;
            updMessage.deleteAnimation = true;
            return updMessage;
          }
          return message;
        })
      };
    });
    setTimeout(() => {
      this.setState(prevState => {
        return {
          messageList: prevState.messageList.filter(message => !message.selected)
        };
      });
    }, 1500);
  }

  selectAll() {
    this.setState(prevState => {
      const newMessageList = prevState.messageList;
      for (let i = 0; i < newMessageList.length; i++) {
        newMessageList[i].selected = !newMessageList[i].selected;
      }

      return {
        messageList: newMessageList
      };
    });
  }

  selectCheckBox(messageIndex) {
    this.setState(prevState => {
      const newMessageList = prevState.messageList;
      newMessageList[messageIndex].selected = !newMessageList[messageIndex].selected;
      return {
        messagesList: newMessageList
      };
    });
  }

  render() {
    return (
      <div className="page">
        <Header createMessage={this.createMessage} />
        <YaSideBar />
        <YaMail
          messageList={this.state.messageList}
          deleteSelected={this.deleteSelected}
          selectCheckBox={this.selectCheckBox}
          selectAll={this.selectAll}
        />
      </div>
    );
  }
}
