import React, { Component } from 'react';

import './app.css';
import '../js/script';
import { Header } from './header';
import { Main } from './main';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <script src="../js/script.js" />
      </div>
    );
  }
}
