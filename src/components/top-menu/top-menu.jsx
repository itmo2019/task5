import React, { Component } from 'react';

import './top-menu.css';
import Check from '../check';

class TopMenuItem extends Component {
  render() {
    return <span onClick={this.props.onClick} className="TopMenuItem">{this.props.text}</span>;
  }
}

export class TopMenu extends Component {
  render() {
    return (
      <div className="TopMenu">
        <Check callback={this.props.checkAll} />
        <div className="TopMenu__ButtonList">
          <TopMenuItem text="Переслать" />
          <TopMenuItem onClick={this.props.deleteChecked} text="Удалить" />
          <TopMenuItem text="Это спам!" />
          <TopMenuItem text="Прочитано" />
        </div>
      </div>
    );
  }
}

export default TopMenu;
