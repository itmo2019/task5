import React, { Component } from 'react';
import { block } from 'bem-cn';

import './footer.css';

const b = block('footer');

function FooterItem({ children }) {
  return <a className={b('item').toString()}>{children}</a>;
}

class Footer extends Component {
  render() {
    return (
      <div className={b().toString()}>
        <div className={b('menu').toString()}>
          <FooterItem>Помощь и обратная связь</FooterItem>
          <FooterItem>Реклама</FooterItem>
          <FooterItem>&copy;&nbsp;2001—2019,&nbsp;</FooterItem>
          <a href="https://yandex.ru/" className={b('item', { author: true }).toString()}>
            Яндекс
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
