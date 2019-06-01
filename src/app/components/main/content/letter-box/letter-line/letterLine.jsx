import * as React from 'react';
import './letterLine.css';

export class LetterLine extends React.Component {
  constructor(props) {
    super(props);
    this.check = this.check.bind(this);
  }

  check(e) {
    const letterId = e.target.id;
    this.props.check(letterId);
  }

  render() {
    const { letterData } = this.props;
    const animation =
      (letterData.arrive ? " arrive" : '') + (letterData.remove ? " remove" : '');
    return (
      <div
        onKeyPress=""
        role="button"
        aria-hidden
        className={`letter-line${animation}`}
        onClick={(event) => {
          if (event.target.className !== "letter-line__check") {
            this.props.openLetter(letterData.text);
          }
        }}
        style={letterData.display ? {} : { display: 'none' }}
      >
        <input
          className="letter-line__check"
          type="checkbox"
          checked={letterData.isChecked}
          id={letterData.id}
          onChange={this.check}
        />
        <img className="letter-line__sender-logo" src={letterData.logo} alt={letterData.sender} />
        <div className="letter-line__sender-name letter-line__sender-name_unread">
          {letterData.sender}
        </div>
        <div className="letter-line__mark letter-line__mark_unread" />
        <div className="letter-line__title letter-line__title_unread">{letterData.title}</div>
        <div className="letter-line__date">{letterData.date}</div>
      </div>
    );
  }
}
