import React, { Component } from 'react';

import './mailBoxShow.css';
import cancel from '../images/cancel.png';
import '../mailBoxLetters/mailBoxLetters.css';

export class Show extends Component {
  checkHidden = () => {
    if (!this.props.hidden) {
      return 'mail-box_hidden';
    }
    return 'inbox-letter mail-box_not-hidden';
  };

  render() {
    return (
      <div className="mail-box__show-letter">
        <div className={this.checkHidden()}>
          <a href="#">
            <img
              src={cancel}
              className="inbox-letter-close"
              onClick={this.props.closeLetter}
              alt="art-close"
            />
          </a>
          <p className="inbox-letter-text">{this.props.shownText}</p>
        </div>
      </div>
    );
  }
}
