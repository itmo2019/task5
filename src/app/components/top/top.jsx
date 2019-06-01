import * as React from 'react';

import './top.css'
import mailLogo from '../../../resources/images/mail-logo-day.png';
import { Strips } from './strips/strips';
import { Search } from './search/search';

export class Top extends React.Component {
  render() {
    return (
      <div className="top">
        <Strips />
        <img className="mail-logo" src={mailLogo} alt="Yandex" />
        <Search />
      </div>
    );
  }
}
