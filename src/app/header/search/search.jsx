import React, { Component } from 'react';

import './search.css';
import cross from '../images/cross.png';

export class Search extends Component {
  render() {
    return (
      <div className="search">
        <input className="search__text-search" type="search" placeholder="Поиск" />
        <img className="search__cross" alt="cross" src={cross} />
      </div>
    );
  }
}
