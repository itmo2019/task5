import React, { Component } from 'react';

// todo removeMarkedMails on delete
// checkbox markAllMails and remove id later!!!

import './MailAction.css';

export class MailAction extends Component {
  render() {
    let actions = [
      { name: 'resend', title: 'Переслать' },
      { name: 'delete', title: 'Удалить', func: 'removeMarkedMails()' },
      { name: 'spam', title: 'Это спам!' },
      { name: 'read', title: 'Прочитано' }
    ].map(item => <Action name={item.name} title={item.title} clickFunc={item.func} />);

    return (
      <div class="mail-action">
        <input
          type="checkbox"
          class="mail-action__chooce_all"
          id="mail-action__chooce_all-id"
          onclick="markAllMails()"
        />
        <div class="mail-action__items">{actions}</div>
      </div>
    );
  }
}

function Action(props) {
  let classStr = `mail-action__button mail-action__${props.name}`;
  let clickFunction = !!props.clickFunc ? props.clickFunc : null;

  return (
    <button className={classStr} onClick={clickFunction}>
      {props.title}
    </button>
  );
}
