import React from "react";

import '../styles/mails-placeholder.css';
import '../styles/components.css';

export function FooterItems() {
  return (
    <div className="list-of-footer-items">
      <a className="list-of-footer-items__company-about text_hide-by-size" href="#">
        © 2001—2018, Яндекс
      </a>
      <a className="list-of-footer-items__company-about text_hide-by-size" href="#">
        Реклама
      </a>
      <a className="list-of-footer-items__company-about text_hide-by-size" href="#">
        Помощь и обратная связь
      </a>
    </div>
  );
}
