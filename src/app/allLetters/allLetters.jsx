import React, { Component } from 'react';

import './allLetters.css';
import { Letter } from '../letter';

export class AllLetters extends Component {
  render() {
    return (
      <div className="allLetters">
        {this.props.visibleLetters.map(letter => {
          return (
            <Letter
              key={letter.id}
              id={letter.id}
              text={letter.text}
              author={letter.author}
              subject={letter.subject}
              date={letter.date}
              changeAnimation={letter.changeAnimation}
              switchLetterCheckbox={this.props.switchLetterCheckbox}
              deleteChosenLetter={this.props.deleteChosenLetter}
              isSelected={this.props.markedLetters[letter.id]}
              openLetter={this.props.openLetter}
            />
          );
        })}
      </div>
    );
  }
}
