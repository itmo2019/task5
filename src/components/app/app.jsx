import React, { Component } from 'react';

import './app.css';
import Header from '../header';
import MailBox from '../mail-box';
import AsideMenu from '../aside-menu';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Header">
          <Header />
        </div>
        <div className="App__AsideMenu">
          <AsideMenu />
        </div>
        <div className="App__MailBox">
          <MailBox />
        </div>
      </div>
    );
  }
}
