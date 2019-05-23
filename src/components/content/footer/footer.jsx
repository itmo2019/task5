import React, { Component } from 'react';
import './footer.css';

export class Footer extends Component {
  render() {
    return (
      <div className="footer content-block__footer">
        <span className="footer__info">© 2001 - 2018, Яндекс</span>
        <span className="footer__info">Реклама</span>
        <span className="footer__info">Помощь и обратная связь</span>
      </div>
    );
  }
}
