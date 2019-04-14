import React, { Component } from 'react';

import './letter-content.css';

export class LetterContent extends Component {
  render() {
    return (
      <div className="content-letter">
        <div
          className="content-letter__close"
          onClick={this.props.closeLetter}
          onKeyPress=""
          role="button"
          aria-hidden
        />
        <header className="content-letter__header">
          <div className="content-letter__header-theme">{this.props.theme}</div>
          <div className="content-letter__header-author">{this.props.author}</div>
        </header>
        <div className="line" />
        <div className="content-letter__body">{this.props.content}</div>
      </div>
    );
  }
}
