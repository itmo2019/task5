import React, {Component} from 'react';

import '../styles/animation.css';
import '../styles/body.css';
import '../styles/components.css';
import '../styles/fonts.css';
import '../styles/header.css';
import '../styles/mails-placeholder.css';
import '../styles/main.css';
import '../styles/navigation.css';
import logo from '../images/YaLogo.png';

function ActionButton() {
  return (<div className="action-button">
    <div className="action-button__line_transparent_height_8px">

    </div>
    <div className="action-button__line_black">

    </div>
    <div className="action-button__line_transparent">

    </div>
    <div className="action-button__line_black">

    </div>
    <div className="action-button__line_transparent">

    </div>
    <div className="action-button__line_black">

    </div>
  </div>);
}

export class MailHeader extends Component {
  render() {
    return (
      <header className="logo-action-search">
        <ActionButton/>
        <div className="logo">
          <img src={logo} className="logo__image"/>
        </div>
        <div className="search">
          <input className="search__search-input" placeholder="Поиск"/>
          <div className="search__close-button">&times;</div>
        </div>
      </header>
    );
  }
}
