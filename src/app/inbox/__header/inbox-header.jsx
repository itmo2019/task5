import React, { Component } from 'react';

import './inbox__checkbox-all.css';
import './inbox__header.css';
import './inbox__header-element.css';
import { YandexCheckbox } from '../../yandex-checkbox/yandex-checkbox';

export class InboxHeader extends Component {
  constructor(props) {
    super(props);
    this.s = this.s.bind(this);
  }

  s() {
    this.props.handleNewMessageClick();
  }

  render() {
    return (
      <header className="inbox__header">
        <div className="inbox__checkbox-all">
          <YandexCheckbox />
        </div>
        <div
          className="inbox_header-element"
          onClick={this.s}
          onKeyPress={this.s}
          role="button"
          tabIndex={0}
        >
          Создать письмо
        </div>
        <div className="inbox_header-element">Переслать</div>
        <div className="inbox_header-element">Удалить</div>
        <div className="inbox_header-element">Это спам!</div>
        <div className="inbox_header-element">Прочитано</div>
      </header>
    );
  }
}
