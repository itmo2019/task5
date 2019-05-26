import React, { Component } from 'react';

import './letters.css';
import { Letter } from './letter';

export class Letters extends Component {
  render() {
    return (
      <div className="letters">
        {this.props.letters.map(letter => {
          if (letter.isVisible)
            return (
              <Letter
                key={letter.id}
                id={letter.id}
                text={letter.text}
                author={letter.author}
                subject={letter.subject}
                date={letter.date}
                isChecked={this.props.checkedLetterIds[letter.id]}
                changeCheckbox={this.props.changeCheckbox}
                openLetter={this.props.openLetter}
                removeAnimation={this.props.removeAnimation}
                deleteLetter={this.props.deleteLetter}
                addAnimation={letter.addAnimation}
                deleteAnimation={letter.deleteAnimation}
              />
            );
        })}
      </div>
    );
  }
}
