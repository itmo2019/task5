import React, { Component } from 'react';

import './lettersList.css';
import { Letter } from './letter/letter';

export class LetterList extends Component {
  constructor(props) {
    super(props);
    this.openLetter = this.props.openLetter.bind(this);
    // this.onCheckboxChange = this.props.onCheckboxChange;
  }

  render() {
    return (
      <ul className="main-block__all-letters" id="all-letters">
        {this.props.letters.map(letter => {
          if (letter.isVisible)
            return (
              <Letter
                id={letter.key}
                key={letter.key}
                text={letter.text}
                author={letter.author}
                topic={letter.topic}
                date={letter.date}
                isChecked={this.props.checkedLetters[letter.key]}
                onCheckboxChange={this.props.onCheckboxChange}
                openLetter={this.openLetter}
              />
            );
        })}
      </ul>
    );
  }
}
