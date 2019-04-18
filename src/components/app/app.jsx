import React, { Component } from 'react';
import { block } from 'bem-cn';

import './app.css';
import Header from '../header';
import MailBox from '../mail-box';
import AsideMenu from '../aside-menu';

const b = block('app');

class App extends Component {
  render() {
    return (
      <div className={b().toString()}>
        <div className={b('header').toString()}>
          <Header />
        </div>
        <div className={b('aside-menu').toString()}>
          <AsideMenu />
        </div>
        <div className={b('mail-box').toString()}>
          <MailBox />
        </div>
      </div>
    );
  }
}

export default App;
