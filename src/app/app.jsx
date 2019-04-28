import React, { Component } from 'react';
import { MainHeader } from './main-header/main-header';
import { PageContent } from './page-content/page-content';

import './app.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <MainHeader />
          <PageContent />
        </header>
      </div>
    );
  }
}
