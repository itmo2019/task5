import React, { Component } from 'react';

import './message.css';
import {
  randomizeAuthor,
  randomizeText,
  randomizeDate,
  randomizeNumber
} from './message__composer';

export function formMessagePage(parent) {
  const prg = parent.parentElement;
  prg.id = 'abracadabra';
  const text = document.querySelector('.message__subject').textContent;
  const author = document.parentElement.querySelector('.message__contact').textContent;
  document.querySelector('.message__page').remove();
  const content = document.querySelector('.message__content');
  const page = document.createElement('div');
  page.classList.add('message__page');
  const pageAuthor = document.createElement('p');
  pageAuthor.textContent = `От кого: ${author}`;
  const pageText = document.createElement('p');
  pageText.innerHTML = text;
  page.innerHTML = pageAuthor.outerHTML + pageText.outerHTML;
  content.appendChild(page);
}

export default class Message extends Component {
  logoSource = `message__logo-${randomizeNumber(0, 3)}.png`;

  render() {
    const result = (
      <section>
        {/* <div className="message message_show message_not-read"> */}
        {/*  <label> */}
        {/*    <input className="checkbox checkbox_message" type="checkbox" /> */}
        {/*  </label> */}
        {/*  <label htmlFor="message-list__cutter" onClick={formCroissant}> */}
        {/*    <img className="message__logo" src={Logo} /> */}
        {/*    <div className="message__contact">Яндекс.Паспорт</div> */}
        {/*    <div className="message__read-icon" /> */}
        {/*    <div className="message__subject">Доступ к аккаунту восстановлен</div> */}
        {/*    <div className="message__date">6 авг</div> */}
        {/*  </label> */}
        {/* </div> */}
        {/* <hr className="hr" /> */}
        <div className="message message_not-read">
          <label>
            <input className="checkbox checkbox_message" type="checkbox" />
          </label>
          <label htmlFor="message-list__cutter" onClick={formMessagePage(this)}>
            <img className="message__logo" src={this.logoSource} />
            <div className="message__contact"> {randomizeAuthor()}</div>
            <div className="message__read-icon" />
            <div className="message__subject"> {randomizeText()} </div>
            <div className="message__date">{randomizeDate()}</div>
          </label>
        </div>
        <hr className="hr" />
      </section>
    );
    return result;
  }
}
