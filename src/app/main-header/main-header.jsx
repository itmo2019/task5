import React from 'react';
import { ToolsIcon } from '../tools-icon/tools-icon';
import { Search } from '../search/search';
import { YandexMailLogo } from '../yandex-mail-logo/yandex-mail-logo';

import './main-header.css';
import './__icon/main-header__icon.css';
import './__logo/main-header__logo.css';
import './__search/main-header__search.css';

export function MainHeader() {
  return (
    <header className="main-header">
      <div className="main-header__icon">
        <ToolsIcon />
      </div>
      <div className="main-header__logo">
        <YandexMailLogo />
      </div>
      <div className="main-header__search">
        <Search />
      </div>
    </header>
  );
}
