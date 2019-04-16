import React, { Component } from 'react';

import './inbox__checkbox-all.css';
import './inbox__header.css';
import './inbox__header-element.css';
import { YandexCheckbox } from '../../yandex-checkbox/yandex-checkbox';

export class InboxHeader extends Component {
  constructor(props) {
    super(props);
    this.handleNewMessageClick = this.handleNewMessageClick.bind(this);
    this.removeSelected = this.removeSelected.bind(this);
  }

  handleNewMessageClick() {
    this.props.handleNewMessageClick();
  }

  removeSelected() {
    this.props.removeSelected();
  }

  render() {
    return (
      <header className="inbox__header">
        <div className="inbox__checkbox-all">
          <YandexCheckbox
            id="all"
            isChecked={this.props.isChecked}
            onChangeAction={this.props.onCheckAction}
          />
        </div>
        <div
          className="inbox_header-element"
          onClick={this.handleNewMessageClick}
          onKeyPress={this.handleNewMessageClick}
          role="button"
          tabIndex={0}
        >
          Создать письмо
        </div>
        <div className="inbox_header-element">Переслать</div>
        <div
          className="inbox_header-element"
          onClick={this.removeSelected}
          onKeyPress={this.removeSelected}
          role="button"
          tabIndex={0}
        >
          Удалить
        </div>
        <div className="inbox_header-element">Это спам!</div>
        <div className="inbox_header-element">Прочитано</div>
      </header>
    );
  }
}
