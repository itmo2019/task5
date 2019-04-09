import React from 'react';

import './search.css';

export default function Search(props) {
  return (
    <div className={`search ${props.className}`}>
      <input className="search__input" type="text" placeholder="Поиск" />
      <div className="search__clear-background">
        <div className="search__clear-text">×</div>
      </div>
    </div>
  );
}
