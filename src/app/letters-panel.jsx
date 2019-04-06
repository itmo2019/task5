import React, { Component } from 'react';
import { Checkbox } from './checkbox';
import '../common.blocks/letters__panel.css';
import '../common.blocks/letters__panel-item.css';
import '../common.blocks/letters__panel-button.css';
import '../common.blocks/mail-link.css';
import '../common.blocks/single-line.css';

export class LettersPanel extends Component {
  render() {
    return (
      <div className="letters__panel">
        <Checkbox check={this.props.checkAll} checked={this.props.isAllSelected}/>
        <LettersPanelItem name="Переслать"/>
        <LettersPanelItem name="Удалить" action={this.props.deleteSelected}/>
        <LettersPanelItem name="Это спам!"/>
        <LettersPanelItem name="Прочитано"/>
      </div>
    );
  }
}

const LettersPanelItem = ({ name, action }) => {
  return (
    <div className="letters__panel-item">
      <p>
        <a className="mail-link single-line letters__panel-button" href="#" onClick={action}>
          {name}
        </a>
      </p>
    </div>
  );
};
