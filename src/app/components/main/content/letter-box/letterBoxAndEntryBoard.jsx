import * as React from 'react';
import './letterBoxAndEntryBoard.css'
import { LetterLine } from './letter-line/letterLine';

export class LetterBoxAndEntryBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letterText: '',
      letters: [],
      opened: false
    };
    this.openLetter = this.openLetter.bind(this);
  }

  openLetter(text) {
    this.setState({ opened: true, letterText: text });
  }

  render() {
    return this.state.opened ? (
      <div className="letter-entry-board">
        <div
          onKeyPress={undefined}
          role="button"
          aria-hidden
          className="letter-entry-board__close-icon"
          onClick={() => {
            this.setState({ opened: false });
          }}
        >
          𐄂
        </div>
        <div className="letter-entry-board__text">{this.state.letterText}</div>
      </div>
    ) : (
      <div className="letter-line-box">
        {this.props.letters.map(letterData => (
          <LetterLine
            letterData={letterData}
            openLetter={this.openLetter}
            check={this.props.check}
          />
        ))}
      </div>
    );
  }
}
