import React, { Component } from 'react';

import { MailHeader } from './mailHeader/mailHeader';
import { MailBody } from './mailBody/mailBody';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <MailHeader />
        <MailBody />
      </div>
    );
  }
}
