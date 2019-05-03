import React from 'react';

import './letter-content.css';

export function LetterContent(props) {
  return (
    <div className="content-letter">
      <div
        className="content-letter__close"
        onClick={props.closeLetter}
        onKeyPress={null}
        role="button"
        aria-hidden
      />
      <header className="content-letter__header">
        <div className="content-letter__header-theme">{props.info.theme}</div>
        <div className="content-letter__header-author">{props.info.author}</div>
      </header>
      <div className="line" />
      <div className="content-letter__body">{props.info.content}</div>
    </div>
  );
}
