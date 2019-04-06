import React, { Component } from 'react';

import './search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <input className="Search__text" placeholder="Поиск" />
        <button type="button" className="Search__close">
          ╳
        </button>
      </div>
    );
  }
}

export default Search;
