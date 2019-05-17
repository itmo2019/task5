import React, { Component } from 'react';

import './letter.css';
import '../page/page.css';

import close from '../../images/cross-symbol.png';

export class Letter extends Component {
  constructor(props) {
    super(props);

    this.makeClassName = this.makeClassName.bind(this);
  }

  makeClassName = () => {
    return this.props.display ? 'letter' : 'letter letter_hidden';
  };

  render() {
    const letter = [];
    for (let i = 0; i < this.props.text.length; i++) {
      letter.push(<p>{this.props.text[i]}</p>);
    }
    return (
      <div className={this.makeClassName()}>
        <article className="letter__my-article">{letter}</article>
        <button
          type="button"
          id="letter__close"
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
