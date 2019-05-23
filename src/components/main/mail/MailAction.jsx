import React, { Component } from 'react';

import './MailAction.css';

export class MailAction extends Component {
  constructor(props) {
    super(props);
    this.markAll = this.markAll.bind(this);
  }

  markAll() {
    if (this.props.markAll)
      this.props.markAll();
  }

  render() {
    const isMarkedAll = this.props.isAllMarked();

    const actions = [
      { name: 'resend', title: 'Переслать' },
      { name: 'delete', title: 'Удалить', func: this.props.removeMarkedMails },
      { name: 'spam', title: 'Это спам!' },
      { name: 'read', title: 'Прочитано' },
      { name: 'newMessage', title: 'Добавить письмо', func: this.props.addNewMail }
    ].map(elem =>
      <Action key={elem.name} name={elem.name} title={elem.title} callFunc={elem.func}/>);

    return (
      <div className="actions actions_view">
        <div className="chose chose_view actions_option">
          <input className="actions__chose-all" type="checkbox" onChange={this.markAll} checked={isMarkedAll}/>
        </div>
        {actions}
      </div>
    );

  }

}

function Action(props) {
  const classStr = `actions__${props.title} actions__${props.title}_view ` +
    'actions_option no-button-decoration';

  return (
    <button className={classStr} onClick={props.callFunc}>
      {props.title}
    </button>
  );
}
