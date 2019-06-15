import React, { Component } from 'react';

import './app.css';
import { Header } from './header';
import { MailInnerContent } from './mailInnerContent';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MailInnerContent />
      </div>
    );
  }
}
