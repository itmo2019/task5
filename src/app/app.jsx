import React, { Component } from 'react';

import { Header } from './header/header';
import { BlockInner } from './block-inner/block-inner';

// import './app.css';
// import './css/animation.css';
// import './css/common-styles.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Header />
          <BlockInner />
        </header>
      </div>
    );
  }
}
