import React, { Component } from 'react';

import '../../styles/header/SearchBar.css';

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar-container">
        <div className="search-bar-container__search-bar-and-close">
          <input
            type="search"
            className="search-bar-container__search-bar"
            placeholder="Поиск"
            value={this.props.filterText}
            onChange={this.props.onFilterChange}
          />
        </div>
      </div>
    );
  }
}
