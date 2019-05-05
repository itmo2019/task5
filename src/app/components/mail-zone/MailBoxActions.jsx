import React, { Component } from 'react';

import '../../styles/mail-box/__input/mail-box__input.css';
import '../../styles/mail-box-actions/__items/mail-box-actions__items.css';
import '../../styles/mail-box-actions/mail-box-actions.css';
import '../../styles/styles.css';

export class MailBoxActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionsList:
        typeof this.props.actionsList !== 'undefined'
          ? this.props.actionsList
          : ['Переслать', 'Удалить', 'Это спам!', 'Прочитано']
    };
  }

  render() {
    const mailBoxActions = this.state.actionsList.map(value => (
      <li className="mail-box-actions__item" key={value}>
        {value}
      </li>
    ));
    return (
      <div id="mail-box-action-list">
        <input
          id="select-all"
          type="checkbox"
          className="mail-box__input"
          style={{ width: '16px', height: '16px' }}
        />
        <ul className="mail-box-actions">{mailBoxActions}</ul>
      </div>
    );
  }
}
