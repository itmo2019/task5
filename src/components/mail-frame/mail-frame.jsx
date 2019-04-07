import React, { Component } from 'react';
import './mail-frame.css';
import classNames from 'classnames';
import { MailBox } from '../mail-box';
import { Footer } from '../footer';

function ActionsItem(props) {
  function buildItem() {
    const type = props.type === undefined ? 'text' : props.type;

    if (type === 'text') {
      const text = props.text === undefined ? 'Элемент меню' : props.text;
      return <span className="MailFrame__Text">{text}</span>;
    }

    if (type === 'checkbox') {
      return <input className="Checkbox MailFrame__Checkbox" type="checkbox" />;
    }

    return <div />;
  }

  return (
    <li className="MailFrame__ActionsItem">
      <button className="MailFrame__Button" type="button" onClick={props.onClick}>
        {buildItem()}
      </button>
    </li>
  );
}

export class MailFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewMessage: undefined,
      removeMessages: undefined
    };
  }

  setAddNewMessage = f => {
    this.setState({ addNewMessage: f });
  };

  setRemoveMessage = f => {
    this.setState({ removeMessages: f });
  };

  render() {
    return (
      <div className={classNames('MailFrame', this.props.className)}>
        <ul className="MailFrame__Actions">
          <ActionsItem type="checkbox" />
          <ActionsItem text="Получить письмо" onClick={this.state.addNewMessage} />
          <ActionsItem text="Переслать" />
          <ActionsItem text="Удалить" onClick={this.state.removeMessages} />
          <ActionsItem text="Это спам!" />
          <ActionsItem text="Прочитано" />
        </ul>

        <MailBox addNewMessage={this.setAddNewMessage} removeMessages={this.setRemoveMessage} />
        <Footer />
      </div>
    );
  }
}
