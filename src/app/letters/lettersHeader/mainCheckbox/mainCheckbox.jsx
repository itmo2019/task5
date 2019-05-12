import React, { Component } from 'react';

import './mainCheckbox.css';

export class MainCheckbox extends Component {
  render() {
    return (
      <input
        type="checkbox"
        className="letters__main-checkbox hidden-checkbox letters__control-panel-button"
        checked={this.props.isAllChecked}
        onChange={this.props.selectAll}
      />
    );
  }
}
