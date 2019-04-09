import React, { Component } from 'react';
import './check.css';

export default class Check extends Component {
  static displayName = 'Check';

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isCheckAll !== this.props.isCheckAll) {
      this.setState({ isChecked: nextProps.isCheckAll });
      return;
    }
    if (nextProps.hiddenMail !== this.props.hiddenMail) {
      this.setState({ isChecked: false });
      return;
    }
    if (nextProps.isMailChecked !== this.props.isMailChecked) {
      this.setState({ isChecked: nextProps.isMailChecked });
    }
  }

  toggleChange = () => {
    this.setState(state => {
      if (this.props.isMainCheckBox) {
        this.props.handleCheckAllClick(!state.isChecked);
        this.props.setCheckAll(!state.isChecked);
      } else {
        if (state.isChecked) {
          this.props.setCheckAll(!state.isChecked);
        }
        this.props.handleMailCheckClick(!state.isChecked);
      }
      return { isChecked: !state.isChecked };
    });
  };

  render() {
    const { isChecked } = this.state;
    return (
      <div className="check">
        <label>
          <input
            className="check__input"
            type="checkbox"
            checked={isChecked}
            onChange={this.toggleChange}
          />
          <span className={`check__box ${isChecked ? 'check__box_checked' : ''}`} />
        </label>
      </div>
    );
  }
}
