import React from 'react';

import './search-form.css';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxLength: '100' };
  }

  render() {
    return (
      <div className="search-form">
        <input
          className="search-form__text"
          maxLength={this.state.maxLength}
          placeholder="Поиск"
          type="text"
        />
        <button className="search-form__clear">✖</button>
      </div>
    );
  }
}
