import React, { Component } from 'react';

import './app.css';
import Header from '../header/header';
import Content from '../content/content';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content/>
      </div>
    );
  }
}

export default App;
