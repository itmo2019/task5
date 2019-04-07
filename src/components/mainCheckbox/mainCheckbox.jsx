import React from 'react';

import './mainCheckbox.css';

class MainCheckbox extends React.Component {
  render() {
    return (
      <div className="MainCheck">
        <label>
          <input className="MainCheck__Input" type="checkbox" onClick={this.props.selectAll} />
          <span className="MainCheck__Box" />
        </label>
      </div>
    );
  }
}

export default MainCheckbox;
