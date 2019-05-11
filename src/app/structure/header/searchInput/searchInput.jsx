import React from 'react';

import './searchInput.css';
import reset from '../images/reset.png';

export class SearchInput extends React.Component {
  render() {
    return (
      <form method="post" className="header__search">
        <input type="text" placeholder="Поиск" className="header__input" />
        <button type="reset" className="header__button">
          <img src={reset} height="12" width="12" alt="reset" />
        </button>
      </form>
    );
  }
}
