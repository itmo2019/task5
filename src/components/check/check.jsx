import React, { Component } from 'react';
import { block } from 'bem-cn';

import './check.css';

const b = block('check');

class Check extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      checked: this.props.checked
    };
  }

  onChange() {
    this.props.callback();
    this.setState({
      checked: !this.state.checked
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.checked !== undefined) {
      return { checked: props.checked };
    } else {
      return state;
    }
  }

  render() {
    const checked = this.state.checked;

    return (
      <div className={b().toString()}>
        <label>
          <input
            onChange={this.onChange}
            checked={checked}
            type="checkbox"
            id="check-all"
            className={b('input').toString()}
            disabled={this.props.disabled}
          />
          <span className={b('box').toString()} />
        </label>
      </div>
    );
  }
}

export default Check;
