import React, { Component } from 'react';

import './MailAction.css';

export class MailAction extends Component {
  constructor(props) {
    super(props);
    this.markAll = this.markAll.bind(this);
  }

  markAll() {
    if (!!this.props.markAll) this.props.markAll();
  }

  render() {
    let actions = [
      { name: 'resend', title: 'Переслать' },
      { name: 'delete', title: 'Удалить', func: this.props.removeMarkedMails },
      { name: 'spam', title: 'Это спам!', func: this.props.spamMail },
      { name: 'read', title: 'Прочитано', func: this.props.markRead }
    ].map(item => (
      <Action key={item.name} name={item.name} title={item.title} clickFunc={item.func} />
    ));

    let isMarkedAll = this.props.isAllMarked();

    return (
      <div className="mail-action">
        <div className="mail-action__items">
          <input
            type="checkbox"
            className="mail-action__chooce_all"
            checked={isMarkedAll}
            onChange={this.markAll}
          />
          {actions}
        </div>
      </div>
    );
  }
}

function Action(props) {
  let classStr = `mail-action__button mail-action__${props.name}`;

  return (
    <button className={classStr} onClick={props.clickFunc}>
      {props.title}
    </button>
  );
}
