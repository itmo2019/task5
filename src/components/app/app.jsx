import React, { Component } from 'react';

import './app.css';
import { Header } from '../header/Header';
import { MainBlock } from '../main-block/MainBlock';
import { Menu } from '../menu/Menu';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Menu />
        <MainBlock />
      </div>
    );
  }
}
