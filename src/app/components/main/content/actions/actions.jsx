import * as React from 'react';
import './actions.css'

export class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionsCheck: false
    };
    this.actionsCheck = this.actionsCheck.bind(this);
  }

  static createAction(name, onClickFunction) {
    return (
      <button
        type="button"
        className="actions__action"
        onClick={onClickFunction}
      >
        {name}
      </button>
    );
  };

  actionsCheck(e) {
    const isChecked = e.target.checked;
    this.props.checkAll(isChecked);
    this.setState({ actionsCheck: isChecked });
  }

  render() {
    const actions = [
      { name: 'Переслать', function: undefined },
      { name: 'Удалить', function: this.props.remove },
      { name: 'Это спам!', function: undefined },
      { name: 'Прочитано', function: undefined }
    ];
    return (
      <div className="actions">
        <input
          className="actions__check"
          type="checkbox"
          checked={this.state.actionsCheck}
          onChange={this.actionsCheck}
        />
        {actions.map(element =>
          Actions.createAction(element.name, element.function)
        )}
      </div>
    );
  }
}
