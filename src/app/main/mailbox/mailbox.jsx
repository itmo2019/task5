import React, { Component } from 'react';
import Footer from './footer/footer';
import MailItem from './mail/mail';

import './mailbox.css';

import { generateMail, getCurrentTime, getRandomInt } from './helper';
import {
  PRELOADED_MAILS,
  MAX_VISIBLE_MAILS,
  MIN_AUTO_MAIL_INTERVAL,
  MIN_AUTO_MAIL_CONSEQUENT_SPAN_INTERVAL,
  MAX_AUTO_MAIL_INTERVAL
} from './data';

export class MailBox extends Component {
  constructor() {
    super();

    // local non-concurrent data
    this.previousMailTime = 0;
    this.penultimateMailTime = 0;

    // binding methods
    this.updateState = this.updateState.bind(this);
    this.newMail = this.newMail.bind(this);
    this.autoMails = this.autoMails.bind(this);
    this.deleteSelected = this.deleteSelected.bind(this);
    this.updateVisibility = mails => {
      let visibleMails = MAX_VISIBLE_MAILS;
      return mails.map(mail => {
        if (mail.deleted) return mail;

        const newMail = mail;

        if (visibleMails > 0) {
          visibleMails--;
          if (mail.state === 'collapsed') {
            newMail.state = 'showed';
          }
        } else if (mail.state === 'showed') {
          newMail.state = 'collapsed';
        }

        return newMail;
      });
    };

    this.state = {
      currentMail: 0,
      mails: PRELOADED_MAILS
    };

    // initialize automatic generation of mails
    const timeout = getRandomInt(MIN_AUTO_MAIL_INTERVAL, MAX_AUTO_MAIL_INTERVAL);
    setTimeout(this.autoMails, timeout);
  }

  componentDidMount() {
    window.newMail = this.newMail;
  }

  updateState(genState) {
    this.setState(prevState => genState(prevState));
  }

  autoMails() {
    const currentTime = getCurrentTime();
    const timeout = getRandomInt(
      Math.max(
        MIN_AUTO_MAIL_INTERVAL,
        Math.min(currentTime - this.penultimateMailTime, MIN_AUTO_MAIL_CONSEQUENT_SPAN_INTERVAL)
      ),
      MAX_AUTO_MAIL_INTERVAL
    );
    this.penultimateMailTime = this.previousMailTime;
    this.previousMailTime = currentTime + timeout;
    this.newMail();
    setTimeout(this.autoMails, timeout);
  }

  newMail() {
    const newMail = generateMail();
    newMail.state = 'init';

    this.updateState(prevState => {
      const { mails, currentMail } = prevState;
      const newMails = mails;
      newMails.unshift(newMail);
      return {
        currentMail,
        mails: this.updateVisibility(newMails)
      };
    });
  }

  deleteSelected() {
    this.updateState(prevState => {
      const { mails, currentMail } = prevState;
      const newMails = mails.map(mail => {
        const newMail = mail;
        if (mail.checked) {
          newMail.state = 'collapsed';
          newMail.markDeleted();
        }
        return newMail;
      });
      return {
        currentMail,
        mails: this.updateVisibility(newMails)
      };
    });
  }

  render() {
    const currentMailObj = this.state.mails.find(mail => mail.id === this.state.currentMail);
    const mailHTML = currentMailObj && currentMailObj.text;

    return (
      <div className="mailbox">
        <div className="mailbox__header">
          <label className="checkbox" htmlFor="checkbox_all">
            <input type="checkbox" className="checkbox__input" id="checkbox_all" />
            <span className="checkbox__span" />
          </label>
          <button className="mailbox__header-element" type="button">
            Переслать
          </button>
          <button className="mailbox__header-element" onClick={this.deleteSelected} type="button">
            Удалить
          </button>
          <button className="mailbox__header-element" type="button">
            Это спам
          </button>
          <button className="mailbox__header-element" type="button">
            Прочитано
          </button>
        </div>

        <input className="mailbox__trigger" type="checkbox" id="mailbox__trigger" />
        <div className="mailbox__mail-list">
          {this.state.mails.map((mail, index) => (
            <MailItem
              key={mail.id}
              mail={mail}
              onClick={() =>
                this.updateState(prevState => {
                  return {
                    currentMail: mail.id,
                    mails: prevState.mails
                  };
                })
              }
              onAnimationEnd={() => {
                this.updateState(prevState => {
                  const { currentMail, mails } = prevState;
                  let newMails = mails;
                  if (mail.state === 'init') {
                    newMails[index].state = 'showed';
                  }
                  if (mail.deleted) {
                    newMails = mails.filter(curMail => curMail.id !== mail.id);
                  }
                  return {
                    currentMail,
                    mails: newMails
                  };
                });
              }}
            />
          ))}
        </div>
        <div className="mailbox__mail-contents">
          <label className="mailbox__msg-close" htmlFor="mailbox__trigger">
            <input type="hidden" />×
          </label>
          <div
            className="mail-contents__html"
            // is task requirement
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: mailHTML
            }}
          />
        </div>

        <Footer />
      </div>
    );
  }
}

export default MailBox;
