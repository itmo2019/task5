import React, { Component } from 'react';

import './inbox__checkbox-all.css';
import './inbox__header.css';
import './inbox__header-element.css';
import { YandexCheckbox } from '../../yandex-checkbox/yandex-checkbox';

export class InboxHeader extends Component {
  render() {
    return (
      <header className="inbox__header">
        <div className="inbox__checkbox-all">
          <YandexCheckbox />
        </div>
        <div className="inbox_header-element">Создать письмо</div>
        <div className="inbox_header-element">Переслать</div>
        <div className="inbox_header-element">Удалить</div>
        <div className="inbox_header-element">Это спам!</div>
        <div className="inbox_header-element">Прочитано</div>
      </header>
    );
  }
}
