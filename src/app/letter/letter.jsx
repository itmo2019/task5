import React, { Component } from 'react';

import './letter.css';
import '../page/page.css';

import close from '../../images/cross-symbol.png';

export class Letter extends Component {
  render() {
    const letter = [];
    for (let i = 0; i < this.props.text.length; i++) {
      letter.push(<p>{this.props.text[i]}</p>);
    }
    return (
      <div
        id="main-letter"
        className="letter"
        style={{ display: this.props.display ? 'inline-block' : 'none' }}
      >
        <article className="letter__my-article">{letter}</article>
        <button
          type="button"
          id="close"
          onClick={() => {
            this.props.closeLetter();
          }}
        >
          <img className="letter__close-img" src={close} alt="close" />
        </button>
      </div>
    );
  }
}
