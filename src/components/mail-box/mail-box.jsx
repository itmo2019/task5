import React, { Component } from 'react';
import { block } from 'bem-cn';
import MessageSender from '../../utils/messageSender';

import './mail-box.css';
import TopMenu from '../top-menu';
import FullMessage from '../full-message';
import Message from '../message';
import Footer from '../footer';

const b = block('mail-box');

class MailBox extends Component {
  constructor(props) {
    super(props);

    this.setMessage = this.setMessage.bind(this);
    this.openMsg = this.openMsg.bind(this);
    this.closeMsg = this.closeMsg.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.animateChecked = this.animateChecked.bind(this);
    this.updCheckMsg = this.updCheckMsg.bind(this);
    this.createMessage = this.createMessage.bind(this);
    this.deleteMsg = this.deleteMsg.bind(this);

    this.globalCount = 0;

    this.state = {
      messages: [
        this.createMessage(
          /* sent */ true,
          /* isRead */ false,
          /* avatar */ '',
          'Яндекс.Паспорт',
          'Доступ к аккаунту восстановлен',
          '6 авг',
          /* checked */ false,
          /* deleteAnim */ false
        ),
        this.createMessage(
          /* sent */ true,
          /* isRead */ false,
          /* avatar */ '',
          'Команда Яндекс.Почты',
          'Как читать почту с мобильного',
          '6 июл',
          /* checked */ false,
          /* deleteAnim */ false
        ),
        this.createMessage(
          /* sent */ true,
          /* isRead */ true,
          /* avatar */ '',
          'Команда Яндекс.Почты',
          'Как читать почту с мобильного',
          '6 июл',
          /* checked */ false,
          /* deleteAnim */ false
        ),
        this.createMessage(
          /* sent */ true,
          /* isRead */ true,
          /* avatar */ '',
          'Яндекс',
          'Соберите всю почту в этот ящик, отсортируйте письма по категории',
          '6 авг',
          /* checked */ false,
          /* deleteAnim */ false
        )
      ],
      fullFlag: false,
      fullMessage: {
        avatarSrc: '',
        name: 'Яндекс',
        text: 'Новое сообщение',
        date: '6 авг'
      },
      checkAll: false
    };

    const sender = new MessageSender(this.setMessage);
    sender.run().catch(console.log);
  }
  setMessage(message) {
    const newMessages = [...this.state.messages];
    newMessages.unshift(
      this.createMessage(
        message.sent,
        message.isRead,
        message.avatarSrc,
        message.name,
        message.text,
        message.time,
        message.deleteAnim
      )
    );
    this.setState({
      messages: newMessages
    });
  }

  openMsg(newData) {
    this.setState({
      fullMessage: newData,
      fullFlag: true
    });
  }

  closeMsg() {
    const state = { ...this.state };
    state.fullMessage.isRead = true;
    state.fullFlag = false;
    this.setState(state);
  }

  createMessage(sent, isRead, avatarSrc, name, text, date, checked, deleteAnim) {
    const message = {
      sent,
      isRead,
      avatarSrc,
      name,
      text,
      date,
      checked,
      deleteAnim
    };

    message.key = this.globalCount++;

    message.updateSent = () => {
      MailBox.updateSent(message);
    };

    message.updateChecked = () => {
      this.updCheckMsg(message);
    };

    message.delete = () => {
      this.deleteMsg(message);
    };

    return message;
  }

  static updateSent(message) {
    message.sent = true;
  }

  updCheckMsg(message) {
    message.checked = !message.checked;
    if (this.state.checkAll === true && message.checked === false) {
      this.state.checkAll = false;
    }
    this.forceUpdate();
  }

  checkAll() {
    const newMessages = [...this.state.messages].map(msg => {
      msg.checked = !this.state.checkAll;
      return msg;
    });

    this.setState({
      messages: newMessages,
      checkAll: !this.state.checkAll
    });
  }

  animateChecked() {
    const newMessages = [...this.state.messages].map(msg => {
      if (msg.checked) {
        msg.deleteAnim = true;
      }
      return msg;
    });

    this.setState({
      messages: newMessages
    });
  }

  deleteMsg(message) {
    this.setState({
      messages: [...this.state.messages].filter(msg => !(msg === message)),
      checkAll: false
    });
  }

  render() {
    const { messages, fullFlag, checkAll } = this.state;

    return (
      <main className={b().toString()}>
        <TopMenu
          checked={checkAll}
          checkAll={this.checkAll}
          animateChecked={this.animateChecked}
          disableCheckbox={fullFlag}
        />
        <div className={b('full-message', { closed: !fullFlag })}>
          <FullMessage data={this.state.fullMessage} closeMsg={this.closeMsg} />
        </div>
        <div className={b('message-list-scroll-container').toString()}>
          <div className={b('message-list-container').toString()}>
            <ul id="message-list" className={b('message-list').toString()}>
              {messages.map((message, index) => {
                return (
                  <Message
                    data={message}
                    key={message.key}
                    first={index === 0 && !message.sent}
                    openMsg={this.openMsg}
                    updateSent={message.updateSent}
                    updCheckMsg={message.updateChecked}
                    delete={message.delete}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className={b('footer').toString()}>
          <Footer />
        </div>
      </main>
    );
  }
}

export default MailBox;
