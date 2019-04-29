import React, { Component } from 'react';

import './mailBoxActions.css';
import { deleteClick } from '../../deletingMessage.js';

export class MailBoxActions extends Component {
  render() {
    return (
      <div className="mail-box__actions">
        <ul>
          <li className="mail-box__action mail-box__select-all">
            <input className="content_checkbox" type="checkbox" />
          </li>
          <li className="mail-box__action content_text-overflow_hidden">Переслать</li>
          <li
            className="mail-box__action mail-box__delete content_text-overflow_hidden"
            onClick={deleteClick}
          >
            Удалить
          </li>
          <li className="mail-box__action content_text-overflow_hidden">Это спам!</li>
          <li className="mail-box__action content_text-overflow_hidden">Прочитано</li>
        </ul>
      </div>
    );
  }
}
