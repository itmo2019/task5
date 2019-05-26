import React, { Component } from 'react';

import './letterPage.css';
import cross from '../../../../header/images/cross.png';

export class LetterPage extends Component {
  render() {
    return (
      <div>
        <a className="letter-page__close letter-page__del-line" href="#" onClick={this.props.closeLetter}>
          <img className="letter-page__cross" alt="" src={cross} />
        </a>
        <div className="letter-page__text-letter">
          {this.props.text.map((paragraph, index) => {
            return <p key={index.toString()}>{paragraph}</p>;
          })}
        </div>
      </div>
    );
  }
}
