import React, { Component } from 'react';
import { Header } from './components/header/Header';
import Menu from './components/menu-zone/Menu';
import MailBox from './components/mail-zone/MailBox';

import './app.css';

export class App extends Component {
  render() {
    return (
      <div className="body">
        <Header /> <Menu /> <MailBox />
      </div>
    );
  }
}
