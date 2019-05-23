import React, { Component } from 'react';

import './checker.css';

export class Checker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.checked !== state.checked) {
      return {
        checked: props.checked
      };
    }
    return null;
  }

  render() {
    return (
      <div
        role="button"
        aria-hidden
        onClick={this.props.clickF}
        className={`check-view ${this.props.parentMix}${
          this.state.checked ? ' check-view_clicked' : ''
        }`}
      />
    );
  }
}
