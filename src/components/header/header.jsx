import React from 'react';

import './header.css';
import logoImg from '../../resources/images/yandex_mail_logo.svg';
import logoLines from '../../resources/images/logo_lines.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="MailHeader">
        <div className="MailHeader__LogoLines">
          <img src={logoLines} alt="Logo lines" />
        </div>
        <div className="MailHeader__Logo">
          <img src={logoImg} alt="Яндекс Почта" />
        </div>
        <div className="MailHeader__Searchbar">
          <input className="MailHeader__SearchbarInput" type="search" placeholder="Поиск" />
        </div>
      </header>
    );
  }
}

export default Header;
