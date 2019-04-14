import React, { Component } from 'react';
import './yandex-checkbox.css';

export class YandexCheckbox extends Component {
  checkboxAction;

  checkboxId;

  isChecked;

  render() {
    return (
      <div className="yandex-checkbox__field">
        <label htmlFor={`checkbox_${this.props.checkboxId}`}>
          <input
            className="yandex-checkbox__input"
            type="checkbox"
            id={`checkbox_${this.props.checkboxId}`}
            checked={this.props.isChecked}
            onChange={this.props.checkboxAction}
          />
          <span
            className={`yandex-checkbox ${this.props.isChecked ? 'yandex-checkbox-checked' : ''}`}
          />
        </label>
      </div>
    );
  }
}
