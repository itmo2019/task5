import React, { Component } from 'react';

import './checkbox.css';

export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.doFunctions = this.doFunctions.bind(this);
  }

  doFunctions() {
    if (this.props.foo) {
      this.props.foo();
    }
    if (this.props.fooForMainCheckbox) {
      this.props.fooForMainCheckbox();
    }
  }

  render() {
    return (
      <label className="check" htmlFor={this.props.id}>
        <input id={this.props.id} className="check__input" type="checkbox" />
        <div
          className="check__box"
          onClick={this.doFunctions}
          onKeyPress={null}
          role="button"
          aria-hidden
        >
          <div className="check__box-border" />
        </div>
      </label>
    );
  }
}
