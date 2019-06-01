import * as React from 'react';
import './search.css';

export class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input className="search__entry-field" placeholder="Поиск" ref={this.search} />
        <div className="search__close-icon">𐄂</div>
      </div>
    );
  }
}
