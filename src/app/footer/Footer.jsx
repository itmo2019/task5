import React, { Component } from 'react';

import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <div className="footer body__footer">
        <div className="footer__line" />
        <a className="footer__text">Помощь и обратная связь</a>
        <a className="footer__text">Реклама</a>
        <a className="footer__text">© 2001—2018, Яндекс</a>
      </div>
    );
  }
}
