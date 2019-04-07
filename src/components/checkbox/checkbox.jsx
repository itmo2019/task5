import React from 'react';

import './checkbox.css';

function removeMainCheckboxIfNeeded(event) {
  if (!event.target.checked) {
    document.body.querySelector('.Checkbox__Input').checked = false;
  }
}

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };

    if (props.updateSetCheckedFalse !== undefined) {
      props.updateSetCheckedFalse(this.setCheckedFalse);
    }
  }

  triggerChanges = () => {
    this.setState(state => {
      const curState = state.isChecked;
      return { isChecked: !curState };
    });
  };

  setCheckedFalse = () => {
    this.setState({ isChecked: false });
  };

  render() {
    return (
      <div className="Checkbox">
        <label>
          <input
            className="Checkbox__Input"
            type="checkbox"
            onClick={
              this.props.onclick === undefined ? removeMainCheckboxIfNeeded : this.props.onclick
            }
            checked={this.state.isChecked}
            onChange={this.triggerChanges}
          />
          <span className="Checkbox__Box" />
        </label>
      </div>
    );
  }
}

export default Checkbox;
