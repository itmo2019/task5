import React, { Component } from 'react';

import './letterPage.css';

export class LetterPage extends Component {
  render() {
    return (
      <div id="opened-letter" className="letter-page">
        <a className="letter-page__page-close-button" href="#" onClick={this.props.closeLetter}>
          &#x2715;
        </a>
        <div className="letter-page__text">
          {this.props.text.map((paragraph, index) => {
            return <p key={index.toString()}>{paragraph}</p>;
          })}
        </div>
      </div>
    );
  }
}
