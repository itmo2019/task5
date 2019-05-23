import React, { Component } from 'react';

import './footer-content.css';

export class FooterContent extends Component {
  render() {
    return (
      <div className="footer-content page__footer-content">
        <footer>
          <nav className="page_inline">
            <a href="/" className="footer-content__link page_text-overflow_hide">
              Помощь и обратная связь
            </a>
            <a href="/" className="footer-content__link page_text-overflow_hide">
              Реклама
            </a>
          </nav>
          <span className="footer-content__copyright page_text-overflow_hide">
            &copy;2001&mdash;2018, Яндекс
          </span>
        </footer>
      </div>
    );
  }
}
