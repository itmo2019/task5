import React, { Component } from 'react';

import './app.css';

import { Header } from './header/header';
import { ActionsBar } from './actionsBar/actionsBar';
import { MailBox } from './mailBox/mailBox';

export class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <ActionsBar />
        <MailBox />
      </div>
    );
  }
}
