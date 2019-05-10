import React, { Component } from 'react';

import './app.css';
import Logo from '../logo';
import Find from '../find';
import Window from '../window';


export class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Logo />
          <Find />
        </header>
        <Window />
      </div>
    );
  }
}
