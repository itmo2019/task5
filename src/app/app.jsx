import React, { Component } from 'react';

import './app.css';

import { Header } from '../components/header/Header';
import { PageContent } from '../components/main/PageContent';

export class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <PageContent/>
      </div>
    );
  }
}
