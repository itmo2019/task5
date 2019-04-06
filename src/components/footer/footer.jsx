import React, { Component } from 'react';

import './footer.css';

class FooterItem extends Component {
  render() {
    return (
      <a className="FooterItem">{this.props.text}</a>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__Menu">
          <FooterItem text="Помощь и обратная связь" />
          <FooterItem text="Реклама" />
          <FooterItem text="&copy;&nbsp;2001—2019,&nbsp;" />
          <a href="https://yandex.ru/" className="FooterItem FooterItem_Author">
            Яндекс
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
