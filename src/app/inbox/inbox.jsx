import React, { Component } from 'react';

import './inbox.css';
import { InboxHeader } from './__header/inbox-header';

export class Inbox extends Component {
  render() {
    return (
      <div className="inbox">
        <InboxHeader />
      </div>
    );
  }
}
