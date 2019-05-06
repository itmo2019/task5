import React, { Component } from 'react';

import '../../styles/mail-box/__input/mail-box__input.css';
import '../../styles/mail-box-actions/__items/mail-box-actions__items.css';
import '../../styles/mail-box-actions/mail-box-actions.css';
import '../../styles/styles.css';

export class MailBoxActions extends Component {
  render() {
    const mailBoxActions = this.props.actionsList.map(({ name, action }) => (
      <li className="mail-box-actions__item" key={name}>
        <div
          className="mail-box-actions__item"
          onClick={action}
          onKeyPress={action}
          tabIndex="0"
          role="button"
        >
          {name}
        </div>
      </li>
    ));
    return (
      <div id="mail-box-action-list">
        <input
          id="select-all"
          type="checkbox"
          className="mail-box__input"
          style={{ width: '16px', height: '16px' }}
          onChange={() => this.props.onCheckBoxChange()}
          checked={this.props.selectedAll}
        />
        <ul className="mail-box-actions">{mailBoxActions}</ul>
      </div>
    );
  }
}
