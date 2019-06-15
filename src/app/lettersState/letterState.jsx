import React, { Component } from 'react';

import './letterState.css';
import { OpenLetter } from '../openLetter';
import { AllLetters } from '../allLetters';

export class LetterState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openLetter: false,
      contentLetter: ''
    };
    this.closeLetter = this.closeLetter.bind(this);
    this.openLetter = this.openLetter.bind(this);
  }

  openLetter(text) {
    this.setState({
      openLetter: true,
      contentLetter: text
    });
  }

  closeLetter() {
    this.setState({
      openLetter: false
    });
  }

  render() {
    return this.state.openLetter ? (
      <div className="letterState letterState_show">
        <OpenLetter contentLetter={this.state.contentLetter} closeLetter={this.closeLetter} />
      </div>
    ) : (
      <div className="letterState letterState_show">
        <AllLetters
          deleteChosenLetter={this.props.deleteChosenLetter}
          switchLetterCheckbox={this.props.switchLetterCheckbox}
          visibleLetters={this.props.visibleLetters}
          openLetter={this.openLetter}
          markedLetters={this.props.markedLetters}
        />
      </div>
    );
  }
}
