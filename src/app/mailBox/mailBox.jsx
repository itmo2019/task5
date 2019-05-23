import React, { Component } from 'react';

import './mailBox.css';
import './mailBoxActions.css';
import './mailBoxContent.css';
import './mailBoxFooter.css';

import { Message } from './message';
import { generateMessage } from '../../messageGen';

const MAX_MESSAGES = 30;

export class MailBox extends Component {
  constructor(props) {
    super(props);
    this.deleteClickHandler = this.deleteClickHandler.bind(this);
    this.selectAllHandler = this.selectAllHandler.bind(this);
    this.state = { messages: [], clickedMessageContent: '' };
  }

  componentDidMount() {
    // const timeout = 60 * 1000 * (5 + Math.floor(Math.random() * 5));
    const timeout = 3000;
    this.adderID = setInterval(() => this.newMail(), timeout);
    this.cleaner = setInterval(() => this.cleanUp(), timeout * 10);
  }

  componentWillUnmount() {
    clearInterval(this.adderID);
    clearInterval(this.cleaner);
  }

  cleanUp() {
    this.setState(state => {
      const updMessages = state.messages.filter(msg => !msg.deleted);
      return { messages: updMessages };
    });
  }

  newMail() {
    const newMessageObj = generateMessage();
    this.setState(state => {
      const updMessages = [newMessageObj].concat(state.messages);
      return { messages: updMessages };
    });
  }

  messageClickHandler(content) {
    this.setState({ clickedMessageContent: content });
  }

  deleteClickHandler() {
    this.setState(state => {
      const updMessages = Array.from(state.messages);
      updMessages.forEach((e, i) => {
        if (e.checked) {
          updMessages[i].deleted = true;
        }
      });
      return { messages: updMessages };
    });
  }

  checkHandler(messageId) {
    this.setState(state => {
      const updMessages = Array.from(state.messages);
      const idx = state.messages.slice(0, MAX_MESSAGES).findIndex(e => e.id === messageId);
      updMessages[idx].checked = !updMessages[idx].checked;
      return { messages: updMessages };
    });
  }

  selectAllHandler(e) {
    const newVal = e.target.checked;
    this.setState(state => {
      const updMessages = Array.from(state.messages);
      updMessages.forEach((e, i) => {
        updMessages[i].checked = newVal;
      });
      return { messages: updMessages };
    });
  }

  render() {
    return (
      <div className="mail-box content__mail-box">
        <div className="mail-box__actions">
          <ul>
            <li className="mail-box__action mail-box__select-all">
              <input
                className="content_checkbox"
                type="checkbox"
                onChange={this.selectAllHandler}
              />
            </li>
            <li className="mail-box__action content_text-overflow_hidden">Переслать</li>
            <li
              className="mail-box__action mail-box__delete content_text-overflow_hidden"
              onClick={this.deleteClickHandler}
            >
              Удалить
            </li>
            <li className="mail-box__action content_text-overflow_hidden">Это спам!</li>
            <li className="mail-box__action content_text-overflow_hidden">Прочитано</li>
          </ul>
        </div>
        <div className="mail-box-content">
          <input type="checkbox" id="message-click" />
          <div className="article mail-box-content__article">
            <label className="article__cross" htmlFor="message-click">
              X
            </label>
            <p className="article__content">{this.state.clickedMessageContent}</p>
          </div>
          <ul className="messages-list">
            {this.state.messages.slice(0, MAX_MESSAGES).map(msg => {
              return (
                <Message
                  message={msg}
                  key={msg.id}
                  messageClickHandler={() => this.messageClickHandler(msg.content)}
                  checkHandler={() => this.checkHandler(msg.id)}
                />
              );
            })}
          </ul>
        </div>
        <div className="content__footer-wrapper">
          <footer>
            <nav className="content_inline">
              <a className="content_text-overflow_hidden" href="">
                Помощь и обратная связь
              </a>
              <a className="content_text-overflow_hidden" href="">
                Реклама
              </a>
            </nav>
            <span className="content_text-overflow_hidden">© 2001&mdash;2018, Яндекс</span>
          </footer>
        </div>
      </div>
    );
  }
}
