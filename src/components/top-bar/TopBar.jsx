import React from 'react';
import './TopBar.css';

export class TopBar extends React.Component {
  createNavigationPanelItem = (name, onClickFunction) => {
    return (
      <li className="horizontal-nav-panel__item">
        <a className="horizontal-nav-panel__link menu-link" href="#" onClick={onClickFunction}>
          {name}
        </a>
      </li>
    );
  };




  render() {
    const navigationPanelValues = [
      { name: 'Переслать', function: undefined },
      { name: 'Удалить', function: undefined},
      { name: 'Это спам!', function: undefined },
      { name: 'Прочитано', function: undefined }
    ];
    return (
      <div className="top-bar">
        <input className="checkbox top-bar__checkbox" type="checkbox" id="select-all-checkbox" />
        <ul className="horizontal-nav-panel">
          {navigationPanelValues.map(element =>
            this.createNavigationPanelItem(element.name, element.function)
          )}
        </ul>
      </div>
    );
  }
}
