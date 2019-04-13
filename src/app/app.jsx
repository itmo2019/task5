import React, { Component } from 'react';
import Header from '../components/header';
import Main from '../components/main';
import './app.css';

export class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Main />
      </div>
    );
  }
}
