import React, { Component } from 'react';

import './mailBox.css';

import { MailBoxActions } from './mailBoxActions';
import { MailBoxContent } from './mailBoxContent';
import { MailBoxFooter } from './mailBoxFooter';

export class MailBox extends Component {
  render() {
    return (
      <div className="mail-box content__mail-box">
        <MailBoxActions />
        <MailBoxContent />
        <MailBoxFooter />
      </div>
    );
  }
}
