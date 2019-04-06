import React from 'react';

import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="hr" />
      <a className="footer_link-decoration" href="#">
        Помощь и обратная связь
      </a>
      <a className="footer_link-decoration" href="#">
        Реклама
      </a>
      <a className="footer_link-decoration" href="#">
        &copy; 2001-2018, Яндекс
      </a>
    </footer>
  );
}
