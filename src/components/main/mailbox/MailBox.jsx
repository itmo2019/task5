import React, { Component } from 'react';

import { MailAction } from './MailAction';
import { MailsRender } from './MailsRender';
import { MailArticle } from './MailArticle';

import { FIVE_MIN, MAIL_BOX_LIMIT, getRandomInt, getLocalDate, getRandomMail } from './mailUtil';

import './MailBox.css';

export class MailBox extends Component {
  constructor(props) {
    super(props);
    this.state = { mails: [] };

    this.createNewMail = this.createNewMail.bind(this);
    this.spamMail = this.spamMail.bind(this);
    this.isAllMarked = this.isAllMarked.bind(this);
    this.markAll = this.markAll.bind(this);
    this.updateAllMarked = this.updateAllMarked.bind(this);
    this.isMailMarked = this.isMailMarked.bind(this);
    this.removeMarkedMails = this.removeMarkedMails.bind(this);
    this.openMail = this.openMail.bind(this);
    this.closeMail = this.closeMail.bind(this);
    this.wasOpened = this.wasOpened.bind(this);
    this.markRead = this.markRead.bind(this);
    this.markSelectedRead = this.markSelectedRead.bind(this);

    this.markedMails = new Set();
    this.wasOpenedMails = new Set();

    setInterval(this.spamMail, FIVE_MIN);
  }

  render() {
    var viewer;
    if (!!this.state.text) {
      viewer = <MailArticle text={this.state.text} closeMail={this.closeMail} />;
    } else {
      viewer = (
        <MailsRender
          mails={this.state.mails}
          updateAllMarked={this.updateAllMarked}
          isMailMarked={this.isMailMarked}
          openMail={this.openMail}
          wasOpened={this.wasOpened}
          markRead={this.markRead}
        />
      );
    }

    return (
      <div className="mail-box">
        <MailAction
          markAll={this.markAll}
          isAllMarked={this.isAllMarked}
          removeMarkedMails={this.removeMarkedMails}
          spamMail={this.createNewMail}
          markRead={this.markSelectedRead}
        />
        {viewer}
        <div className="contacts">
          <footer className="contacts__info">
            <a className="contact__info-item" href="">
              Помощь и обратная связь
            </a>
            <a className="contact__info-item" href="">
              Реклама
            </a>
            <span className="contact__info-item">&copy; 2001 &ndash; 2018, Яндекс</span>
          </footer>
        </div>
      </div>
    );
  }

  wasOpened(id) {
    return this.wasOpenedMails.has(id);
  }

  markSelectedRead() {
    let mailCount = this.state.mails.length;
    let limit = Math.max(0, mailCount - MAIL_BOX_LIMIT);

    for (var i = limit; i < mailCount; i++) {
      if (this.markedMails.has(i)) {
        this.markRead(i);
      }
    }

    this.markedMails.clear();
    this.forceUpdate();
  }

  markRead(id) {
    this.wasOpenedMails.add(id);
  }

  openMail(id) {
    let mailText = this.state.mails[id].text;
    this.markRead(id);

    this.setState({
      text: mailText
    });
  }

  closeMail() {
    this.setState({
      text: null
    });
  }

  removeMarkedMails() {
    let mails = this.state.mails;
    let notDeletedMails = [];

    var deletedMails = 0;
    let limit = Math.max(mails.length - MAIL_BOX_LIMIT, 0);

    for (var i = limit; i < mails.length; i++) {
      if (this.markedMails.has(i)) {
        deletedMails++;
        this.wasOpenedMails.delete(i);
      } else {
        notDeletedMails.push(mails[i]);

        if (this.wasOpenedMails.has(i)) {
          this.wasOpenedMails.delete(i);
          this.wasOpenedMails.add(i - deletedMails);
        }
      }
    }

    if (limit != 0) {
      notDeletedMails = notDeletedMails.concat(mails.slice(0, limit));
    }

    this.markedMails.clear();

    this.setState({
      mails: notDeletedMails
    });
  }

  markAll() {
    let wasMakedAll = this.isAllMarked();
    this.markedMails.clear();

    if (!wasMakedAll) {
      let mails = this.state.mails;
      let limit = Math.max(mails.length - MAIL_BOX_LIMIT, 0);
      for (var i = mails.length - 1; i >= limit; i--) {
        this.markedMails.add(i);
      }
    }

    this.forceUpdate();
  }

  isAllMarked() {
    let mailCount = Math.min(this.state.mails.length, MAIL_BOX_LIMIT);
    return this.markedMails.size > 0 && this.markedMails.size === mailCount;
  }

  isMailMarked(id) {
    return this.markedMails.has(id);
  }

  updateAllMarked(id) {
    let wasAllMarked = this.isAllMarked();

    if (this.isMailMarked(id)) {
      this.markedMails.delete(id);
    } else {
      this.markedMails.add(id);
    }

    if (this.isAllMarked() || wasAllMarked) {
      this.forceUpdate();
      return true;
    }
    return false;
  }

  createNewMail() {
    let mailTemplate = getRandomMail();
    let date = getLocalDate();
    let newMail = new MailInfo(
      mailTemplate['logo'],
      mailTemplate['sender'],
      mailTemplate['title'],
      date,
      mailTemplate['text']
    );

    let otherMails = this.state.mails;
    otherMails.push(newMail);
    this.setState({
      mails: otherMails
    });
  }

  spamMail() {
    let currentRandomTimeout = getRandomInt(FIVE_MIN);
    setTimeout(this.createNewMail, currentRandomTimeout);
  }
}

export class MailInfo {
  constructor(logo, sender, title, time, text) {
    this.logo = logo;
    this.sender = sender;
    this.title = title;
    this.time = time;
    this.text = text;
    this.isMarked = false;
  }
}
