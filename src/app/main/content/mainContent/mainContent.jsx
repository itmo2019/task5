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
    this.closeLetter = this.closeLetter.bind(this);
    this.openLetter = this.openLetter.bind(this);
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
      <div className="main-content main-content_show">
        <LetterPage text={this.state.openedLetterText} closeLetter={this.closeLetter} />
      </div>
    ) : (
      <div className="main-content main-content_show">
        <Letters
          removeAnimation={this.props.removeAnimation}
          deleteLetter={this.props.deleteLetter}
          letters={this.props.letters}
          openLetter={this.openLetter}
          checkedLetterIds={this.props.checkedLetterIds}
          changeCheckbox={this.props.changeCheckbox}
        />
      </div>
    );
  }
}
