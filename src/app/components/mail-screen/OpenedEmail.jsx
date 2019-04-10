import React, { Component } from 'react';

import { CloseEmailButton } from './CloseEmailButton';

import '../../styles/mail-screen/OpenedEmail.css';

export class OpenedEmail extends Component {
  render() {
    return (
      <div className="content__email-content">
        <CloseEmailButton onClick={this.props.onCloseClick} />
        <div className="content__email-text">
          {this.props.text.map((t, index) => {
            return <p key={`text_${t.length}_p_${index.toString()}`}>{t}</p>;
          })}
        </div>
      </div>
    );
  }
}
