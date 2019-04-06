import React, { Component } from 'react';

import './app.css';

import Header from '../header/header';
import MainBlock from '../main-block/main-block';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MainBlock />
      </div>
    );
  }
}
