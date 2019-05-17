import React, { Component } from 'react';

import './app.css';
import { MessagesContainer } from '../messages-container/messages-container';
import Header from '../header/header';
import Menu from '../menu/menu';

const FIRST_MSG_MIN_TIMEOUT = 10;
const MIN_TIMEOUT = 5 * 60 * 1000;
const MAX_TIMEOUT = 10 * 60 * 1000;

export class App extends Component {
  constructor(props) {
    super(props);
    this.setNewMail = this.setNewMail.bind(this);

    this.state = {
      newMail: () => {}
    };
  }

  componentDidMount() {
    this.setTimer(true);
  }

  setNewMail(f) {
    this.setState({ newMail: f });
  }

  setTimer(isFirstMsg) {
    setTimeout(() => {
      this.newMail();
      this.setTimer(false);
    }, this.randFromRange(isFirstMsg ? FIRST_MSG_MIN_TIMEOUT : MIN_TIMEOUT, MAX_TIMEOUT));
  }

  randFromRange = (from, to) => {
    return Math.random() * (to - from) + from;
  };

  newMail() {
    this.state.newMail();
  }

  render() {
    return (
      <div className="page">
        <Header />

        <div className="page__content">
          <Menu newMail={() => this.newMail()} />
          <MessagesContainer setNewMail={this.setNewMail} />
        </div>
      </div>
    );
  }
}
