import React, { Component } from 'react';

import './lettersList.css';
import { Letter } from './letter';
import { Footer } from './footer';
import { OpenLetter } from './openLetter';

export class LettersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLetterOpened: false,
      openedLetterTheme: null,
      openedLetterText: null
    };
  }

  openLetter(theme, text) {
    this.setState({
      isLetterOpened: true,
      openedLetterTheme: theme,
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
      <div className="letters-list" id="letters-list">
        <OpenLetter
          theme={this.state.openedLetterTheme}
          text={this.state.openedLetterText}
          closeLetter={this.closeLetter.bind(this)}
        />
        <Footer/>
      </div>
    ) : (
      <div className="letters-list" id="letters-list">
        {this.props.letters.map(letter => {
          if (letter.isVisible)
            return (
              <Letter
                id={letter.id}
                text={letter.text}
                from={letter.from}
                date={letter.date}
                theme={letter.theme}
                isChecked={this.props.checkedLetters[letter.id]}
                changeCheckboxStatus={this.props.changeCheckboxStatus}
                deleteLetters={this.props.deleteLetters}
                selectAll={this.props.selectAll}
                openLetter={this.openLetter.bind(this)}
              />
            );
        })}
        <Footer/>
      </div>
    );
  }
}
