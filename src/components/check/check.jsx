import React, { Component } from 'react';

import './check.css';

import { handleCheckBoxClick } from '../../utils/handleLetterFunctions';

export default class Check extends Component {
  static displayName = 'Check';

  render() {
    return (
      <div className="Check">
        <label>
          <input
            className="Check__Input"
            type="checkbox"
            onClick={this.props.onclick === undefined ? handleCheckBoxClick : this.props.onclick}
          />
          <span className="Check__Box" />
        </label>
      </div>
    );
  }
}
