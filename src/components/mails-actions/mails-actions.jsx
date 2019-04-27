import React, { Component } from 'react';

import './mails-actions.css';
import YaLink from '../ya-link';
import YaCheckbox from '../ya-checkbox';

export class MailsActions extends Component {

  render() {
    const checkboxProps = {
      id: "select-all",
      onClick: (e) => this.props.selectAll(e.target.checked)
    };

    return (
      <div id="mails__actions">
        <YaCheckbox {...checkboxProps} />
        <div className="mail__action">
          <YaLink text="Переслать" />
        </div>
        <div className="mail__action">
          <YaLink text="Удалить" click={this.props.removeLetters} />
        </div>
        <div className="mail__action">
          <YaLink text="Это спам!" />
        </div>
        <div className="mail__action">
          <YaLink text="Прочитано" />
        </div>
      </div>
    );
  }
}

export default MailsActions;
