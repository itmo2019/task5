import React from 'react';

import './footer.css';
import YaLink from '../ya-link';

function Footer() {
  return (
    <footer>
      <nav className="credential">
        <div className="credential__item">
          <YaLink text="Помощь и обратная связь" />
        </div>
        <div className="credential__item">
          <YaLink text="Реклама" />
        </div>
        <div className="credential__item">
          <YaLink text="© 2001&mdash;2018, Яндекс" />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
