import React, { Component } from 'react';

import './mailBoxFooter.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__bottom-line" />
        <div className="footer__copyright"> &copy; 2001-2019, Яндекс</div>
        <a href="#" className="footer__additional-link">
          Реклама
        </a>
        <a href="#" className="footer__additional-link">
          Помощь и обратная связь
        </a>
      </footer>
    );
  }
}
