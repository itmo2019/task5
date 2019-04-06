import React, { Component } from 'react';

import './check.css';

export class Check extends Component {
  constructor(props) {
    super(props);

    this.callback = this.callback.bind(this);

    this.state = {
      checked: this.props.checked
    };
  }

  callback() {
    this.props.callback();
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const checked = this.state.checked;

    return (
      <div className="Check">
        <label>
          <input onChange={this.callback} checked={checked} type="checkbox" id="check-all" className="Check__Input" />
          <span className="Check__Box" />
        </label>
      </div>
    );
  }
}

export default Check;
