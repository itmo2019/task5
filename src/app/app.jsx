import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { LeftMenu } from './components/left-menu/LeftMenu';
import { Footer } from './components/mail-screen/Footer';

export class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <div className="content">
          <LeftMenu/>
        </div>
      </>
    )
  }
}
