import React, { Component } from 'react';

import './mailBoxFooter.css';

export class MailBoxFooter extends Component {
  render() {
    return (
      <div className="content__footer-wrapper">
        <footer>
          <nav className="content_inline">
            <a className="content_text-overflow_hidden" href="">
              Помощь и обратная связь
            </a>
            <a className="content_text-overflow_hidden" href="">
              Реклама
            </a>
          </nav>
          <span className="content_text-overflow_hidden">© 2001&mdash;2018, Яндекс</span>
        </footer>
      </div>
    );
  }
}
