import React, { Component } from 'react';

import {Sidebar} from './sidebar/Sidebar';
import { MailContent } from './mail/MailContent';

import './PageContent.css'

export class PageContent extends Component{
  render() {
    return (
      <main className="page-content">
        <Sidebar />
        <MailContent />
      </main>
    );
  }
}
