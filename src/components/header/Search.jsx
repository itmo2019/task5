import React, { Component } from 'react';

import './Search.css';

export class Search extends Component {
  render() {
    return (
      <div className="search-block">
        <input type="text" class="search-block__input" placeholder="Поиск" />
      </div>
    );
  }
}
