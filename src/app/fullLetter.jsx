import React, { Component } from 'react';

import './app.css';

class FullLetter extends Component {
  render() {
    return(
      <div>{this.props.text}</div>
    )
  }
}

export default FullLetter;
