import React, { Component } from 'react';
import { MailToolbar } from '../mail-toolbar/mail-toolbar';

import './page-content.css';
import './__content/page-content__content.css';
import './__left-toolbar/page-content__left-toolbar.css';
import { Inbox } from '../inbox/inbox';

export class PageContent extends Component {
  render() {
    return (
      <div className="page-content">
        <section className="page-content__left-toolbar">
          <MailToolbar />
        </section>
        <section className="page-content__content">
          <Inbox />
        </section>
      </div>
    );
  }
}
