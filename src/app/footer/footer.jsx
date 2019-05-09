import React, { Component } from 'react';

import './footer.css';
import '../page/page.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer__menu">
          <li className="footer__menu-link footer__menu-text">
            <a href="." className="page__my-link footer__link">
              <p>Помощь и обратная связь</p>
            </a>
          </li>

          <li className="footer__menu-link footer__menu-text">
            <a href="." className="page__my-link footer__link">
              <p>Реклама</p>
            </a>
          </li>

          <li className="footer__menu-link footer__menu-text">
            <p className="footer__my-copy">&copy; 2001-2018, Яндекс</p>
          </li>
        </ul>
      </footer>
    );
  }
}
