import React, { Component } from 'react';

import './app.css';
import { MainHeader } from './main-header/main-header';
import { PageContent } from './page-content/page-content';

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
