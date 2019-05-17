import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer messages-container__footer">
      <span className="footer__item footer__item_last">
        &copy; 2001-2018,{' '}
        <a href="https://yandex.ru" title="yandex.ru" className="footer__item-link">
          Яндекс
        </a>
      </span>
      <a
        href="https://yandex.ru/adv"
        title="yandex.ru/adv"
        className="footer__item footer__item-link"
      >
        Реклама
      </a>
      <a
        href="https://yandex.ru/support/mail"
        title="yandex.ru/support/mail"
        className="footer__item footer__item-link"
      >
        Помощь и обратная связь
      </a>
    </footer>
  );
}

export default Footer;
