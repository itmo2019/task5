import React, { Component } from 'react';

import './app.css';

import { Header } from './header/header';
import { YaSideBar } from './ya-sidebar/ya-sidebar';

export class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <YaSideBar />
      </div>
    );
  }
}
