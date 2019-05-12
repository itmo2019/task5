import React, { Component } from 'react';

import './openLetter.css';
import cross from './images/33.png';

export class OpenLetter extends Component {
  render() {
    return (
      <section id="open-letter">
        <input type="checkbox" id="check-label" />
        <div className="open-letter hidden-text">
          <div className="open-letter__header">
            <h3 className="open-letter__header-text" id="letter-theme">
              {this.props.theme}
            </h3>
            <label htmlFor="check-label" className="cross">
              <img className="cross__button" src={cross} alt="close" onClick={this.props.closeLetter}/>
            </label>
          </div>
          <div className="open-letter__content clearfix" id="letter-text">
            <div className="open-letter__text">
              {this.props.text}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
