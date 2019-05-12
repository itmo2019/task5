import React, { Component } from 'react';

import './footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="line"/>
        <p className="footer__button">
          <small><a href="#">Помощь и обратная связь</a></small>
        </p>
        <p className="footer__button">
          <small><a href="#">Реклама</a></small>
        </p>
        <p className="footer__button">
          <small><a href="#">2001-2018, Яндекс</a></small>
        </p>
      </footer>
    );
  }
}
