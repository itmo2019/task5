import React, { Component } from 'react';

import './check.css';

import { handleCheckBoxClick } from '../../utils/handleLetterFunctions';

export default class Check extends Component {
  static displayName = 'Check';

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };

    if (props.updateSetCheckedFalse !== undefined) {
      props.updateSetCheckedFalse(this.setCheckedFalse);
    }
  }

  toggleChange = () => {
    this.setState(state => {
      return { isChecked: !state.isChecked };
    });
  };

  setCheckedFalse = () => {
    this.setState({ isChecked: false });
  };

  render() {
    return (
      <div className="Check">
        <label>
          <input
            className="Check__Input"
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
            onClick={this.props.onclick === undefined ? handleCheckBoxClick : this.props.onclick}
          />
          <span className="Check__Box" />
        </label>
      </div>
    );
  }
}
