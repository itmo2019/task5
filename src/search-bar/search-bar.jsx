import React from 'react';
import './search-bar.css';

function SearchBar() {
  return (
    <section className="search-bar header__search-bar">
      <input type="text" className="search-bar__input" placeholder="Поиск" />
      <div className="search-bar__close-icon">&times;</div>
    </section>
  );
}

export default SearchBar;
