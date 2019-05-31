import React, { Component } from 'react';
import MailItem from './mail/mail';

import './mail-list.css';

export class MailList extends Component {
  render() {
    const { mails, updateState } = this.props;
    return (
      <div className="mailbox__mail-list">
        {mails.map(mail => (
          <MailItem key={mail.id} mail={mail} updateState={updateState} />
        ))}
      </div>
    );
  }
}

export default MailList;
