import React, { Component } from 'react';

import './inbox.css';
import { InboxHeader } from './__header/inbox-header';
import { InboxFooter } from './__footer/inbox-footer';
import { InboxMessages } from './__messages/inbox-messages';

export class Inbox extends Component {
  render() {
    return (
      <div className="inbox">
        <InboxHeader />
        <InboxMessages />
        <InboxFooter />
      </div>
    );
  }
}
