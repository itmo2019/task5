import React from 'react';

import './ya-search.css';

function YaSearch() {
  return (
    <div className="ya-search">
      <input id="ya-search__input" type="text" placeholder="Поиск" />
      <i className="ya-search__clear-button">&times;</i>
    </div>
  );
}

export default YaSearch;
