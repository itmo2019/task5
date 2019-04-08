import React, { Component } from 'react';

import '../../styles/mail-screen/MailScreen.css';

export class OpenedEmail extends Component {
  render() {
    return (
      <div className="content__email-content">
        <div onClick={this.props.onCloseClick} className="close-email">
          &#x2715;
        </div>
        <div>
          {this.props.text.map(t => {
            return <p>{t}</p>;
          })}
        </div>
      </div>
    );
  }
}
