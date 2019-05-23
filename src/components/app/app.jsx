import React, { Component } from 'react';

import './app.css';

import { Header } from '../header';
import { Menu } from '../menu';
import { Content } from '../content';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Menu />
        <Content />
      </div>
    );
  }
}
