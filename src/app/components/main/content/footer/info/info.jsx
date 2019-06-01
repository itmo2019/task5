import * as React from 'react';
import './info.css'

export class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <a className="info__option" href="help">
          Помощь и обратная связь
        </a>
        <a className="info__option" href="adv">
          Реклама
        </a>
        <a className="info__option" href="yandex">
          © 2001—2018, Яндекc
        </a>
      </div>
    );
  }
}
