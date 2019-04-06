import React, { PureComponent } from 'react';
import '../common.blocks/sidebar__hamburger.css';
import '../common.blocks/sidebar__logo.css';
import '../common.blocks/sidebar__img-mail.css';
import '../common.blocks/sidebar__img-yandex.css';
import mail from '../sidebar__img-mail.svg';
import yandex from '../sidebar__img-yandex.svg';

export class SidebarLogo extends PureComponent {
  render() {
    return (
      <div>
        <svg
          className="sidebar__hamburger"
          viewBox="0 0 16 16"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0h16v2H0V0zm0 7h16v2H0V7zm0 7h16v2H0v-2z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <div className="sidebar__logo">
          <img
            alt="yandex"
            className="sidebar__img-yandex"
            src={yandex}
          />
          <img
            alt="mail"
            className="sidebar__img-mail"
            src={mail}
          />
        </div>
      </div>
    );
  }
}
