import React, { Component } from 'react';
import { block } from 'bem-cn';

import './search.css';

const b = block('search');

class Search extends Component {
  render() {
    return (
      <div className={b().toString()}>
        <input className={b('text').toString()} placeholder="Поиск" />
        <button type="button" className={b('close').toString()}>
          ╳
        </button>
      </div>
    );
  }
}

export default Search;
