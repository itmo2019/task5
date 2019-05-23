import React, { Component } from 'react';

import { MESSAGES_LIMIT } from './mailUtils';
import { Mail } from './Mail';

import './MailFactory.css';

export class MailFactory extends Component {
  constructor(props) {
    super(props);
    this.initMails = this.initMails.bind(this);
  }

  render() {
    return (<div className="content-main">{this.initMails()}</div>);
  }

  initMails() {
    const mailsInfo = this.props.mails;
    const mailComponents = [];
    const limit = Math.max(mailsInfo.length - MESSAGES_LIMIT, 0);

    for (var i = mailsInfo.length - 1; i >= limit; i--) {
      const info = mailsInfo[i];
      const newMail = <Mail
          key={i}
          id={i}
          logo={info.logo}
          sender={info.sender}
          title={info.title}
          time={info.time}
          justAdded={info.justAdded}
          toDelete={info.toDelete}
          updateAllMarked={this.props.updateAllMarked}
          isMailMarked={this.props.isMailMarked}
          openMail={this.props.openMail}
      />;
      mailComponents.push(newMail);
      mailsInfo[i].justAdded = false;

    }
    return mailComponents;
  }
}
