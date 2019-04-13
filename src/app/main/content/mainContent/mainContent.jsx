import React, { Component } from 'react';

import './mainContent.css';
import { LetterPage } from './letterPage';
import { Letters } from './letters';

export class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLetterOpened: false,
      openedLetterText: null
    };
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
      <div className="main-content">
        <LetterPage text={this.state.openedLetterText} closeLetter={this.closeLetter.bind(this)} />
      </div>
    ) : (
      <div className="main-content">
        <Letters
          letters={this.props.letters}
          openLetter={this.openLetter.bind(this)}
          checkedLetterIds={this.props.checkedLetterIds}
          onCheckboxChange={this.props.onCheckboxChange}
        />
      </div>
    );
  }
}
