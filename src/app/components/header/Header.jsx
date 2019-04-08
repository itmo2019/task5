import React, { Component } from 'react';
import { SearchBar } from './SearchBar';

import '../../styles/header/Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <button className="hamburger" type="button">
          <img className="hamburger__img" alt="" />
        </button>
        <div className="header__mlogo" />
        <SearchBar filterText={this.props.filterText} onFilterChange={this.props.onFilterChange} />
      </header>
    );
  }
}
