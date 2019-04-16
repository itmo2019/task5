import React, { Component } from 'react';
import './yandex-checkbox.css';

export class YandexCheckbox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onChangeAction();
  }

  render() {
    return (
      <div className="yandex-checkbox__field">
        <label htmlFor={`checkbox_${this.props.id}`}>
          <input
            className="yandex-checkbox__input"
            type="checkbox"
            id={`checkbox_${this.props.id}`}
            onChange={this.handleChange}
          />
          <span
            className={`yandex-checkbox ${this.props.isChecked ? 'yandex-checkbox-checked' : ''}`}
          />
        </label>
      </div>
    );
  }
}
