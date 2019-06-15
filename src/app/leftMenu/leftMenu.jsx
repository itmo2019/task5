import React, { Component } from 'react';

import './leftMenu.css';
import { MailMenu } from '../mailMenu';

export class LeftMenu extends Component {
  render() {
    return (
      <div className="leftMenu">
        <button className="leftMenu__button" onClick={this.props.newMail}>
          <span className="leftMenu__textWrite">Написать</span>
        </button>
        <MailMenu />
      </div>
    );
  }
}
