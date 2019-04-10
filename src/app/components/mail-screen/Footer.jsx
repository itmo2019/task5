import React, { PureComponent } from 'react';

import '../../styles/mail-screen/Footer.css';

export class Footer extends PureComponent {
  render() {
    return (
      <footer className="mail-footer">
        <span className="footer-item">
          <a className="mail-footer__item-link" href="#help">
            Помощь и обратная связь
          </a>
        </span>
        <span className="footer-item">
          <a className="mail-footer__item-link" href="#ads">
            Реклама
          </a>
        </span>
        <span className="footer-item">
          <a className="mail-footer__item-link" href="https://yandex.ru">
            &copy; 2001-2018, Яндекс
          </a>
        </span>
      </footer>
    );
  }
}
