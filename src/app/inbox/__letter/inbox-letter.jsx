import React, { Component } from 'react';

import './inbox__letter.css';
import './inbox__letter-close-message.css';
import './inbox__letter-content.css';
import '../../util.css';

export class InboxLetter extends Component {
  constructor(props) {
    super(props);
    this.closeLetter = this.closeLetter.bind(this);
  }

  closeLetter() {
    this.props.closeLetter();
  }

  render() {
    return (
      <div className={`inbox__letter ${this.props.display ? '' : 'not-displayed'}`} id="letter">
        <div
          className="inbox__letter-close-letter"
          onClick={this.closeLetter}
          onKeyPress={this.closeLetter}
          role="button"
          tabIndex={0}
        >
          x
        </div>
        <div className="inbox__letter-content" id="letter-content">
          {this.props.content}
        </div>
      </div>
    );
  }
}
