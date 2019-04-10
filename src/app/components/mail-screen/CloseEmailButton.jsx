import React, { Component } from 'react';

import '../../styles/mail-screen/CloseEMail.css';

export class CloseEmailButton extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onClick} className="close-email">
        &#x2715;
      </button>
    );
  }
}
