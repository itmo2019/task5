import React, { Component } from 'react';
import { block } from 'bem-cn';

import './top-menu.css';
import Check from '../check';

const b = block('top-menu');

function TopMenuItem({ children, onClick }) {
  return (
    <span onClick={onClick} className={b('item').toString()}>
      {children}
    </span>
  );
}

class TopMenu extends Component {
  render() {
    return (
      <div className={b().toString()}>
        <Check
          checked={this.props.checked}
          callback={this.props.checkAll}
          disabled={this.props.disableCheckbox}
        />
        <div className={b('button-list').toString()}>
          <TopMenuItem>Переслать</TopMenuItem>
          <TopMenuItem onClick={this.props.animateChecked}>Удалить</TopMenuItem>
          <TopMenuItem>Это спам!</TopMenuItem>
          <TopMenuItem>Прочитано</TopMenuItem>
        </div>
      </div>
    );
  }
}

export default TopMenu;
