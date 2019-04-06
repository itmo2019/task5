import React, { Component } from 'react';

import './mail-box.css';
import TopMenu from '../top-menu';
import FullMessage from '../full-message';
import Message from '../message';
import Footer from '../footer';

const min = 10;
const max = 600000;

export class MailBox extends Component {
  constructor(props) {
    super(props);

    this.newMail = this.newMail.bind(this);
    this.openMsg = this.openMsg.bind(this);
    this.closeMsg = this.closeMsg.bind(this);
    this.checkAll = this.checkAll.bind(this);

    this.state = {
      messages: [
        MailBox.createMessage(
          /* sent */ true,
          /* isRead */ false,
          /* avatar */ '',
          'Яндекс.Паспорт',
          'Доступ к аккаунту восстановлен',
          '6 авг',
          /* checked */ false,
          /* deleteAnim */ false
        ),
        MailBox.createMessage(
          /* sent */ true,
          /* isRead */ false,
          /* avatar */ '',
          'Команда Яндекс.Почты',
          'Как читать почту с мобильного',
          '6 июл',
          /* checked */ false,
          /* deleteAnim */ false
        ),
        MailBox.createMessage(
          /* sent */ true,
          /* isRead */ true,
          /* avatar */ '',
          'Команда Яндекс.Почты',
          'Как читать почту с мобильного',
          '6 июл',
          /* checked */ false,
          /* deleteAnim */ false
        ),
        MailBox.createMessage(
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

    const self = this;
    (async function() {
      await self.getMail();
    })();
  }

  openMsg(newData) {
    this.setState({
      fullMessage: newData,
      fullFlag: true
    });
  }

  closeMsg() {
    this.setState({
      fullFlag: false
    });
  }

  static createMessage(sent, isRead, avatarSrc, name, text, date, checked, deleteAnim) {
    return {
      sent,
      isRead,
      avatarSrc,
      name,
      text,
      date,
      checked,
      deleteAnim
    };
  }

  static getRandomInterval() {
    return Math.floor(Math.random() * Math.floor(min + max) - min);
  }

  static sleep(interval) {
    return new Promise(resolve => setTimeout(resolve, interval));
  }

  async getMail() {
    await MailBox.sleep(MailBox.getRandomInterval());
    await this.newMail();
    while (true) {
      await MailBox.sleep(MailBox.getRandomInterval() + max);
      await this.newMail();
    }
  }

  static parseText(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    let cleanText = div.innerText.replace(/\r?\n|\r/g, '');
    const ind = cleanText.indexOf('References[edit]');
    if (ind > 0) {
      cleanText = cleanText.substring(0, ind);
    }
    return cleanText;
  }

  async newMail() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const endpointRandom =
      'https://en.wikipedia.org/w/api.php?action=query&list=random&utf8=&format=json&rnlimit=1&rnnamespace=0&prop=info';
    const endpointPage =
      'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text|images|links&pageid=';
    const imagePath = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

    const randomPageIdRaw = await fetch(proxyUrl + endpointRandom);
    const randomPageId = await randomPageIdRaw.json();
    const id = randomPageId.query.random[0].id;
    const randomPageRaw = await fetch(proxyUrl + endpointPage + id);
    const randomPage = await randomPageRaw.json();

    const name = randomPage.parse.title;
    const text = MailBox.parseText(randomPage.parse.text['*']);
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}`;
    let avatarSrc = '';
    if (randomPage.parse.images.length > 0) {
      avatarSrc = imagePath + randomPage.parse.images[0];
    }

    const newMessages = this.state.messages;
    newMessages.unshift(
      MailBox.createMessage(
        /* sent */ false,
        /* isRead */ false,
        avatarSrc,
        name,
        text,
        time,
        /* deleteAnim */ false
      )
    );
    this.setState({
      messages: newMessages
    });
  }

  static updateSent(message) {
    message.sent = true;
  }

  static updCheckMsg(message) {
    message.checked = !message.checked;
  }

  checkAll() {
    const newMessages = this.state.messages.map(msg => {
      msg.checked = !this.state.checkAll;
      return msg;
    });

    this.setState({
      messages: newMessages,
      checkAll: !this.state.checkAll
    });
  }

  deleteChecked() {
    const newMessages = this.state.messages.map(msg => {
      if (msg.checked) {
        msg.deleteAnim = true;
      }
      return msg;
    });

    this.setState({
      messages: newMessages
    });

    setTimeout(
      () =>
        this.setState({
          messages: this.state.messages.filter(msg => !msg.checked)
        }),
      450
    );
  }

  render() {
    const messages = this.state.messages;
    const opened = this.state.fullFlag
      ? ' MailBox__FullMessage_Opened'
      : ' MailBox__FullMessage_Closed';

    return (
      <main className="MailBox">
        <TopMenu
          checkAll={() => {
            this.checkAll();
          }}
          deleteChecked={() => {
            this.deleteChecked();
          }}
        />
        <div className={`MailBox__FullMessage${opened}`}>
          <FullMessage data={this.state.fullMessage} closeMsg={this.closeMsg} />
        </div>
        <div className="MailBox__MessageListScrollContainer">
          <div className="MailBox__MessageListContainer">
            <ul id="message-list" className="MailBox__MessageList">
              {messages.map((message, index) => {
                return (
                  <Message
                    data={message}
                    key={Math.random()}
                    first={index === 0 && !message.sent}
                    openMsg={this.openMsg}
                    updateSent={() => {
                      MailBox.updateSent(message);
                    }}
                    updCheckMsg={() => {
                      MailBox.updCheckMsg(message);
                    }}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="MailBox__Footer">
          <Footer />
        </div>
      </main>
    );
  }
}

export default MailBox;
