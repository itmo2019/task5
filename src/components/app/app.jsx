import React from 'react';
import LettersWindow from '../lettersWindow/lettersWindow';
import logoLines from '../../resources/images/logo_lines.svg';
import logoImg from '../../resources/images/yandex_mail_logo.svg';

import './app.css';

class App extends React.Component {
  render() {
    return (
      <div className="mail-page">
        <header className="header">
          <div className="header__logo-lines">
            <img src={logoLines} alt="Logo lines" />
          </div>
          <div className="header__logo">
            <img src={logoImg} alt="Логотип Яндекс.Почты" />
          </div>
          <div className="search">
            <input className="search_textfield" type="search" placeholder="Поиск" />
          </div>
        </header>
        <LettersWindow />
      </div>
    );
  }
}

export default App;
