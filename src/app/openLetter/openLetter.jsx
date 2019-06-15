import React, { Component } from 'react';

import './openLetter.css';
import cross from '../images/cross.png';

export class OpenLetter extends Component {
  render() {
    return (
      <div>
        <a className="openLetter__close openLetter__delLine" href="#">
          <img className="openLetter__cross" alt="" src={cross} onClick={this.props.closeLetter} />
        </a>
        <div className="openLetter__textLetter">{this.props.contentLetter.map((paragraph) => {
            return <p>{paragraph}</p>;
        })}</div>
      </div>
    );
  }
}
