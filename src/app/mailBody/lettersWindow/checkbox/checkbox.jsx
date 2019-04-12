import React, { Component } from 'react';

import './checkbox.css';

export class Checkbox extends Component {
  render() {
    return (
      <label className="check" htmlFor={this.props.id}>
        <input id={this.props.id} className="check__input" type="checkbox" />
        <div className="check__box" onClick={this.props.foo}>
          <div className="check__box__border" />
        </div>
      </label>
    );
  }
}
