import React, { Component } from 'react';

import './search.css';

export class Search extends Component {
  render() {
    return <input type="search" placeholder="Поиск" className="search" />;
  }
}
