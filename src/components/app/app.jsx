import React, { Component } from 'react';

import './app.css';
import { Header } from '../header';
import { MainMenu } from '../main-menu';
import { MailFrame } from '../mail-frame';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="AppHeader" />
        <MainMenu className="AppMainMenu" />
        <MailFrame className="AppMailFrame" />
      </div>
    );
  }
}
