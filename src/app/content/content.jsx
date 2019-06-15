import React, { Component } from 'react';

import './content.css';
import { LettersMenu } from '../lettersMenu';
import { LetterState } from '../lettersState';
import { Footer } from '../footer';

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <LettersMenu
          markLettersToDelete={this.props.markLettersToDelete}
          selectAll={this.props.selectAll}
          chooseAllLetters={this.props.chooseAllLetters}
        />
        <LetterState
          deleteChosenLetter={this.props.deleteChosenLetter}
          switchLetterCheckbox={this.props.switchLetterCheckbox}
          visibleLetters={this.props.visibleLetters}
          markedLetters={this.props.markedLetters}
        />
        <Footer />
      </div>
    );
  }
}
