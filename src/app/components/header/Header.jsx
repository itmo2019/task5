import React, { PureComponent } from 'react'

import '../../styles/header/Header.css'

export class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <button className="hamburger">
          <img 
            className="hamburger__img"
            alt=""
          />
        </button>
        <div className="header__mlogo"></div>
        <div className="search-bar-container">
          <div className="search-bar-container__search-bar-and-close">
            <input
              type="search"
              className="search-bar-container__search-bar"
              placeholder="Поиск"
              value={this.props.filterText}
              onChange={this.props.onFilterChange}
            />
          </div>
        </div>
      </header>
    )
  }
}
