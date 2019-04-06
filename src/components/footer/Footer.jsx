import React from 'react';
import './Footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <nav className="footer-bar">
          <a className="footer-link footer-bar__item" href="#">
            Помощь и обратная связь
          </a>
          <a className="footer-link footer-bar__item" href="#">
            Реклама
          </a>
          <a className="footer-link footer-bar__item" href="#">
            &#9400; 2001—2018, Яндекc
          </a>
        </nav>
      </div>
    );
  }
}
