import React from 'react';

import './footer.css';

function FooterWrapper({ value }) {
  return (
    <a className="footer_link-decoration" href="#">
      {value}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="hr" />
      <FooterWrapper value="Помощь и обратная связь" />
      <FooterWrapper value="Реклама" />
      <FooterWrapper value="&copy; 2001-2018, Яндекс" />
    </footer>
  );
}
