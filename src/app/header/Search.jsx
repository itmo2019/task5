import React, { Component } from 'react';

import './Search.css';

export class Search extends Component {
  render() {
    return (
      <div className="search header__search">
        <input className="search__input" placeholder="Поиск" />
        <button type="reset" className="search__cross-button">
          &#9747;
        </button>
      </div>
    );
  }
}
