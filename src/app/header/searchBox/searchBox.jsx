import React, { Component } from 'react';

import './searchBox.css';
import cross from './images/33.png';

export class SearchBox extends Component {
  render() {
    return (
      <div className="search-box header__search-box">
        <input className="search-box__input" placeholder="Поиск" type="search"/>
        <a href="#">
          <img className="search-box__cross" src={cross} alt="delete search text"/>
        </a>
      </div>
    );
  }
}
