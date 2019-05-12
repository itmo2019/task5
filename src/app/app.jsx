import React, { Component } from 'react';

import './app.css';
import { Header } from './header';
import { LeftMenu } from './leftMenu/leftMenu';
import { Letters } from './letters';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <LeftMenu />
        <Letters />
      </div>
    );
  }
}
