import React, { Component } from 'react';
import './yandex-checkbox.css';

export class YandexCheckbox extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = { isChecked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(state => ({
      isChecked: !state.isChecked
    }));
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
            className={`yandex-checkbox ${this.state.isChecked ? 'yandex-checkbox-checked' : ''}`}
          />
        </label>
      </div>
    );
  }
}
