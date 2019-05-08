import React, { Component } from 'react';

import { Mail } from './Mail';
import { MAIL_BOX_LIMIT } from './mailUtil.js';

import './MailsRender.css';

export class MailsRender extends Component {
  constructor(props) {
    super(props);
    this.initMails = this.initMails.bind(this);
  }

  render() {
    return <div className="mails">{this.initMails()}</div>;
  }

  initMails() {
    let mailsInfo = this.props.mails;
    let mailComponents = [];

    let limit = Math.max(mailsInfo.length - MAIL_BOX_LIMIT, 0);
    for (var i = mailsInfo.length - 1; i >= limit; i--) {
      let info = mailsInfo[i];

      mailComponents.push(
        <Mail
          key={i}
          id={i}
          logo={info.logo}
          sender={info.sender}
          title={info.title}
          time={info.time}
          updateAllMarked={this.props.updateAllMarked}
          isMailMarked={this.props.isMailMarked}
          openMail={this.props.openMail}
          wasOpened={this.props.wasOpened}
          markRead={this.props.markRead}
        />
      );
    }

    return mailComponents;
  }
}
