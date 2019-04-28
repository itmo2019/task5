import React from 'react';

import './inbox__footer.css';
import './inbox__footer-date.css';
import './inbox__footer-element.css';

export function InboxFooter() {
  return (
    <footer className="inbox__footer">
      <a className="inbox__footer-element" href="https://yandex.ru/support/mail/">
        Помощь и обратная связь
      </a>
      <a className="inbox__footer-element" href="https://yandex.ru/adv/">
        Реклама
      </a>
      <span className="inbox__footer-date">© 2001—2018,</span>
      <a className="inbox__footer-element" href="https://yandex.ru/">
        Яндекc
      </a>
    </footer>
  );
}
