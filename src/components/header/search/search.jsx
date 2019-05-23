import React, { Component } from 'react';

import './search.css';

export class Search extends Component {
  render() {
    return (
      <div className="search header__search">
        <input className="search__input" placeholder="Поиск" />
        <div className="search__clean-search" />
      </div>
    );
  }
}
