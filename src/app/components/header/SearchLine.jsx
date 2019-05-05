import React, { Component } from 'react';
import '../../styles/search-line/search-line.css';

export class SearchLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: typeof this.props.placeholder === 'undefined' ? 'Поиск' : this.props.placeholder
    };
  }

  render() {
    return <input className="search-line" type="search" placeholder={this.state.placeholder} />;
  }
}
