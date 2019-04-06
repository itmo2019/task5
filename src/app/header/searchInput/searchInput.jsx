import React, { Component } from 'react';

import './searchInput.css';

export class SearchInput extends Component {
  render() {
    return (
      <div className="search-input">
        <input className="search-input__input" type="text" placeholder="Поиск"/>
        <span className="search-input__close">&#x2715;</span>
      </div>
    );
  }
}
