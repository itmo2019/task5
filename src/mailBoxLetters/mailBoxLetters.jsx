import React, { Component } from 'react';

import './mailBoxLetters.css';
import { SeparateLetter } from '../separateLetter/separateLetter';

export class Letters extends Component {
  checkHidden = () => {
    if (this.props.hidden) {
      return 'mail-box_hidden';
    }
    return 'mail-box__letters mail-box_not-hidden';
  };

  render() {
    return (
      <ul className={this.checkHidden()}>
        {this.props.letters.map(letter => {
          return (
            <SeparateLetter
              {...letter}
              key={letter.id}
              changeChecked={this.props.changeChecked}
              openLetter={this.props.openLetter}
              deleteLetters={this.props.deleteLetters}
              deleteAddAnimation={this.props.deleteAddAnimation}
            />
          );
        })}
      </ul>
    );
  }
}
