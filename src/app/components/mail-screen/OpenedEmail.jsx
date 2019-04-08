import React, { Component } from 'react';

import '../../styles/mail-screen/OpenedEmail.css';

export class OpenedEmail extends Component {
  render() {
    return (
      <div className="content__email-content">
        <button type="button" onClick={this.props.onCloseClick} className="close-email">
          &#x2715;
        </button>
        <div className="content__email-text">
          {this.props.text.map((t, index) => {
            return <p key={`text_${t.length}_p_${index.toString()}`}>{t}</p>;
          })}
        </div>
      </div>
    );
  }
}
