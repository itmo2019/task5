import React, { Component } from 'react';

import './lettersWindow.css';

import { LettersWindowHeader } from './header/lettersWindowHeader';
import { LettersWindowBody } from './body/lettersWindowBody';
import { LettersWindowFooter } from './footer/lettersWindowFooter';
import { Line } from './line/line';

export class LettersWindow extends Component {
  constructor(props) {
    super(props);
    this.setRemoving = this.setRemoving.bind(this);
    this.state = {
      removing: false
    };
  }

  setRemoving() {
    console.log("setRemoving");
    const lettersBody = document.getElementById('lettersBody');
    if (lettersBody.querySelector('.content-letter') !== null) {
      return;
    }
    this.setState(() => ({
      removing: true
    }));
  }

  render() {
    return (
      <div id="letters" className="letters-window">
        <LettersWindowHeader fooRemoving={this.setRemoving} />
        <Line />
        <LettersWindowBody removing={this.state.removing} />
        <Line />
        <LettersWindowFooter />
      </div>
    );
  }
}
