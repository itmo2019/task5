import React from 'react';
import './header.css';
import yandexLogo from './yandex_mail.png';

function Header() {
  return (
    <div className={'header'}>
      <div className={'header__three_dashes'}>
        <div className={'dash dash__first-dash'}></div>
        <div className={'dash dash__second-dash'}></div>
        <div className={'dash dash__third-dash'}></div>
      </div>
      <img src={yandexLogo} className={'header__logo'}/>
      <label className="header__search">
        <input className="search__input-text" type="text" value="Поиск"></input>
        <input className="search__input-button" type="button"></input>
        <span className="search__cross"> X </span>
      </label>
    </div>
  )
}

export default Header;
