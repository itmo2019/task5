import React, { Component } from 'react';

import './mailbox.css';

export class Mailbox extends Component {
  render() {
    return (
      <div className="mailbox-content">
        <div className="messages-control-panel">
          <div className="messages-control-panel__choose-all">
            <input id="checkbox_all" onClick="markOrUnmarkAll()" className="checkbox" type="checkbox"/>
            <label htmlFor="checkbox_all" className="checkbox__label"></label>
          </div>
          <a className="messages-control-panel__element" href="">Переслать</a>
          <a className="messages-control-panel__element" onClick="removeLetters()" href="#">Удалить</a>
          <a className="messages-control-panel__element" href="">Это спам!</a>
          <a className="messages-control-panel__element" href="">Прочитано</a>
        </div>

        <div className="mailbox">
          <div className="mailbox-content__letter" id="letter_opened">
            <div className="mailbox-content__cross" onClick="closeMessage()">x</div>
            <div className="mailbox-content__letter-content" id="letter-content"></div>
          </div>
          <div className="mailbox-content__messages" id="messages-wrapper"></div>
        </div>

        <footer className="mailbox-content__footer">
          <a className="mailbox-content__footer-element" href="">Помощь и обратная связь</a>
          <a className="mailbox-content__footer-element" href="">Реклама</a>
          <a className="mailbox-content__footer-element">© 2001—2018, Яндекc</a>
        </footer>
      </div>
    );
  }
}

export default Mailbox;
