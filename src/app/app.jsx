import React, { Component } from 'react';

import { Header } from '../components/header/Header';
import { MainContent } from '../components/main/MainContent';

export class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <MainContent />
      </div>
    );
  }
}
