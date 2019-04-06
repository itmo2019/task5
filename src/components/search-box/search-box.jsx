import React, { Component } from 'react';
import classNames from 'classnames';
import './search-box.css';

export class SearchBox extends Component {
  render() {
    return (
      <input
        className={classNames('SearchBox', this.props.className)}
        type="search"
        placeholder={this.props.placeholder}
      />
    );
  }
}
