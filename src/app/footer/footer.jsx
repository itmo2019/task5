import React from 'react';

import './footer.css';

export function Footer() {
  return (
    <footer className="block-inner__footer footer">
      <a href="." className="footer__links">
        Помощь и обратная связь
      </a>
      <a href="." className="footer__links">
        Реклама
      </a>
      <span className="footer__links">©2001-2018, Яндекс</span>
    </footer>
  );
}
