import React from 'react';
import './TopBar.css';

export class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topBarCheckboxChecked: false
    };
    this.handleChangeTopBarCheckbox = this.handleChangeTopBarCheckbox.bind(this);
  }

  createNavigationPanelItem = (name, onClickFunction) => {
    return (
      <li className="horizontal-nav-panel__item">
        <button
          type="button"
          className="horizontal-nav-panel__button menu-link"
          onClick={onClickFunction}
        >
          {name}
        </button>
      </li>
    );
  };

  handleChangeTopBarCheckbox(e) {
    const isChecked = e.target.checked;
    this.props.topBarCheckboxHandler(isChecked);
    this.setState({ topBarCheckboxChecked: isChecked });
  }

  render() {
    const navigationPanelValues = [
      { name: 'Переслать', function: undefined },
      { name: 'Удалить', function: this.props.deleteMessages },
      { name: 'Это спам!', function: undefined },
      { name: 'Прочитано', function: undefined }
    ];
    return (
      <div className="top-bar">
        <input
          className="checkbox top-bar__checkbox"
          type="checkbox"
          checked={this.state.topBarCheckboxChecked}
          onChange={this.handleChangeTopBarCheckbox}
        />
        <ul className="horizontal-nav-panel">
          {navigationPanelValues.map(element =>
            this.createNavigationPanelItem(element.name, element.function)
          )}
        </ul>
      </div>
    );
  }
}
