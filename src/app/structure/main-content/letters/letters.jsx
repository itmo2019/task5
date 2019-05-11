import React, { Component } from 'react';

import './letters.css';
import { LetterPage } from './letter-page/letterPage';
import { LetterList } from './letters-list/letterList';

export class Letters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLetterOpened: false,
      openedLetterText: null
    };

    this.openLetter = this.openLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
    // this.onCheckboxChange = this.props.onCheckboxChange;
  }

  openLetter(text) {
    this.setState({
      isLetterOpened: true,
      openedLetterText: text
    });
  }

  closeLetter() {
    this.setState({
      isLetterOpened: false,
      openedLetterText: null
    });
  }

  render() {
    return this.state.isLetterOpened ? (
      <LetterPage text={this.state.openedLetterText} closeLetter={this.closeLetter} />
    ) : (
      <LetterList
        letters={this.props.letters}
        checkedLetters={this.props.checkedLetters}
        openLetter={this.openLetter}
        onCheckboxChange={this.props.onCheckboxChange}
      />
    );
  }
}
