import React from 'react';
import './TopBar.css';

export class TopBar extends React.Component {
  createNavigationPanelItem = name => {
    return (
      <li className="horizontal-nav-panel__item">
        <a className="horizontal-nav-panel__link menu-link" href="#">
          {name}
        </a>
      </li>
    );
  };

  render() {
    const navigationPanelNames = ['Переслать', 'Удалить', 'Это спам!', 'Прочитано'];
    return (
      <div className="top-bar">
        <input className="checkbox top-bar__checkbox" type="checkbox" id="select-all-checkbox" />
        <ul className="horizontal-nav-panel">
          {navigationPanelNames.map(name => this.createNavigationPanelItem(name))}
        </ul>
      </div>
    );
  }
}
