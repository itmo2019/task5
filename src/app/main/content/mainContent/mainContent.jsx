import React, { Component } from 'react';

import './mainContent.css';
import { closeLetter } from '../../../../js/script';

export class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="letters" />
        <div id="opened-letter" className="letter-page">
          <a className="letter-page__page-close-button" href="#" onClick={closeLetter}>
            &#x2715;
          </a>
          <div className="letter-page__text" />
        </div>
      </div>
    );
  }
}
