import React, { Component } from 'react';

import { MailAction } from './MailAction';
import { MailFactory } from './MailFactory';
import { MailBody } from './MailBody';

import { FIVE_MIN, MESSAGES_LIMIT, getRandomInt, getLocalDate, getRandomMail, MailState } from './mailUtils';

import './MailContent.css';

export class MailContent extends Component {
  constructor(props) {
    super(props);
    this.state = { mails: [] };

    this.createNewMail = this.createNewMail.bind(this);
    this.addNewMail = this.addNewMail.bind(this);
    this.isAllMarked = this.isAllMarked.bind(this);
    this.markAll = this.markAll.bind(this);
    this.updateAllMarked = this.updateAllMarked.bind(this);
    this.isMailMarked = this.isMailMarked.bind(this);
    this.removeMarkedMails = this.removeMarkedMails.bind(this);
    this.openMail = this.openMail.bind(this);
    this.closeMail = this.closeMail.bind(this);

    this.markedMails = new Set();

    setInterval(this.addNewMail, FIVE_MIN);
  }

  render() {
    var content;
    if (this.state.text)
      content = <MailBody
        text={this.state.text}
        closeMail={this.closeMail}
      />;
    else
      content = (
        <MailFactory
          mails={this.state.mails}
          updateAllMarked={this.updateAllMarked}
          isMailMarked={this.isMailMarked}
          openMail={this.openMail}
        />
      );


    return (
      <div className="mail-content mail-content_view">
        <MailAction
          markAll={this.markAll}
          isAllMarked={this.isAllMarked}
          removeMarkedMails={this.removeMarkedMails}
          addNewMail={this.createNewMail}
        />
        {content}
        <footer className="footer footer_view">
          <p className="footer__site-information footer__site-information_view">
            <a href="" className="footer__link footer__link_view">Помощь и обратная связь</a>
            <a href="" className="footer__link  footer__link_view">Реклама</a>
            &copy; 2001 &mdash; 2018, Яндекс
          </p>
        </footer>
      </div>
    );
  }


  openMail(id) {
    const mailText = this.state.mails[id].text;
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
    const mails = this.state.mails;
    const limit = Math.max(mails.length - MESSAGES_LIMIT, 0);
    let notDeletedMails = [];
    var deletedMails = 0;
    for (var i = limit; i < mails.length; i++) {
      if (this.markedMails.has(i)) {
        deletedMails++;
        mails[i].toDelete = true;
      } else {
        notDeletedMails.push(mails[i]);
      }
    }
    if (limit !== 0) {
      notDeletedMails = notDeletedMails.concat(mails.slice(0, limit));
    }
    this.markedMails.clear();
    this.setState({
      mails: mails
    });
    setTimeout(() => {
      this.setState({ mails: notDeletedMails });
    }, 1000);
  }

  markAll() {
    let wasMakedAll = this.isAllMarked();
    this.markedMails.clear();
    let mails = this.state.mails;
    if (!wasMakedAll) {
      let limit = Math.max(mails.length - MESSAGES_LIMIT, 0);
      for (var i = mails.length - 1; i >= limit; i--) {
        this.markedMails.add(i);
      }
    }

    this.setState({
      mails: mails
    });
  }

  isAllMarked() {
    return this.markedMails.size > 0 && this.markedMails.size === this.state.mails.length;
  }

  isMailMarked(id) {
    return this.markedMails.has(id);
  }

  updateAllMarked(id) {
    let wasAllMarked = this.isAllMarked();
    const mails = this.state.mails;

    if (this.isMailMarked(id))
      this.markedMails.delete(id);
    else
      this.markedMails.add(id);

    if (this.isAllMarked() || wasAllMarked) {
      this.setState({ mails: mails });
      return true;
    }
    return false;
  }

  async createNewMail() {
    let mailTemplate = await getRandomMail();
    let date = getLocalDate();
    let newMail = new MailState(
      mailTemplate['logo'],
      mailTemplate['sender'],
      mailTemplate['title'],
      date,
      mailTemplate['text']
    );
    let otherMails = this.state.mails;
    otherMails.push(newMail);
    this.setState({ mails: otherMails });
    setTimeout(() => {
      this.setState({ mails: otherMails });
    }, 10);
  };


  addNewMail() {
    let currentRandomTimeout = getRandomInt(FIVE_MIN);
    setTimeout(this.createNewMail, currentRandomTimeout);
  }
}


