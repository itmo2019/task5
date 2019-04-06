import React, { Component } from 'react';
import '../common.blocks/search-bar__input.css';
import '../common.blocks/search-bar__button-close.css';
import '../common.blocks/search-bar.css';

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input className="search-bar__input" placeholder="Поиск" type="text"/>
        <button className="search-bar__button-close" type="button">
          X
        </button>
      </div>
    );
  }
}
