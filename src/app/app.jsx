import React, { Component } from 'react';

import './app.css';

import Header from '../header/header';
import MainBlock from '../main-block/main-block';

export class App extends Component {

  constructor(props) {
    super(props);
    this.newMail = this.newMail.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deleteSelectedMessages = this.deleteSelectedMessages.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  newMail() {
    console.log('123');
  }

  selectAll() {

  }

  deleteSelectedMessages() {

  }

  closeMessage() {

  }


  render() {
    return (
      <div className="app">
        <Header newMailFunction={this.newMail}/>
        <MainBlock selectAll={this.selectAll} deleteSelected={this.deleteSelectedMessages} closeMessage={this.closeMessage}/>
      </div>
    );
  }
}
