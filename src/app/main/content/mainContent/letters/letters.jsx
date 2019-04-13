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
                authorAbbr={letter.authorAbbr}
                author={letter.author}
                subject={letter.subject}
                date={letter.date}
                isChecked={this.props.checkedLetterIds[letter.id]}
                onCheckboxChange={this.props.onCheckboxChange}
                openLetter={this.props.openLetter}
              />
            );
        })}
      </div>
    );
  }
}
