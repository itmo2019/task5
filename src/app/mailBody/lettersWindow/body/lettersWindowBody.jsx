import React, { Component } from 'react';

import './letters-window-body.css';
import { LetterView } from '../letterView/letterView';
import { Line } from '../line/line';
import { LetterContent } from '../letterContent/letterContent';

export class LettersWindowBody extends Component {
  render() {
    return (
      <div id="lettersBody" className="letters-window__body">
        {this.props.showLetterContent[0] ? (
          <LetterContent
            author={this.props.showLetterContent[1].author}
            theme={this.props.showLetterContent[1].theme}
            content={this.props.showLetterContent[1].content}
            closeLetter={this.props.fooCloseLetter}
          />
        ) : (
          this.props.letters.map(letter => (
            <div className="letter-with-line" key={letter.id}>
              <LetterView
                checkboxId={letter.id}
                author={letter.author}
                theme={letter.theme}
                content={letter.content}
                showLetter={this.props.fooShowLetter}
              />
              <Line />
            </div>
          ))
        )}
      </div>
    );
  }
}
