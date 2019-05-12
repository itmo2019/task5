import React, { Component } from 'react';

import './lettersHeader.css';
import { MainCheckbox } from './mainCheckbox';
import { DecorativeCheckbox } from './decorativeCheckbox';
import { ControlPanelButton } from './controlPanelButton';

export class LettersHeader extends Component {
  render() {
    return (
      <header className="letters__header">
        <MainCheckbox
          isAllChecked={this.props.isAllChecked}
          selectAll={this.props.selectAll}
        />
        <DecorativeCheckbox/>
        <ControlPanelButton name="Переслать" />
        <ControlPanelButton name="Удалить" onClick={this.props.deleteLetters} />
        <ControlPanelButton name="Это спам!" />
        <ControlPanelButton name="Прочитано" />
      </header>
    );
  }
}
