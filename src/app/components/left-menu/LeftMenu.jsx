import React, { Component } from 'react';
import { MenuAction } from './MenuAction';
import { NewMessageButton } from './NewMessageButton';

import '../../styles/left-menu/LeftMenu.css';

const actions = [
  { title: 'Входящие', fragment: 'inbox' },
  { title: 'Отправленные', fragment: 'sent' },
  { title: 'Удалённые', fragment: 'deleted' },
  { title: 'Спам', fragment: 'spam' },
  { title: 'Черновики', fragment: 'drafts' },
  { title: 'Создать папку', fragment: 'createfldr' },
  {
    title: 'Очень длинная команда, ну просто очень длинная, самая длинная здесь',
    fragment: 'longcmd'
  }
];

export class LeftMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlySelectedActionID: 0
    };
  }

  selectAction(selectedActionId /* :number */) {
    this.setState({
      currentlySelectedActionID: selectedActionId
    });
  }

  render() {
    return (
      <nav className="left-menu">
        <button
          type="button"
          className="left-menu__get-new-message-btn pressable-button"
          onClick={this.props.generateNewEMail}
        >
          Получить письмо
        </button>
        <NewMessageButton />
        <div className="menu-actions">
          {actions.map((action, index) => {
            return (
              <MenuAction
                title={action.title}
                isSelected={index === this.state.currentlySelectedActionID}
                fragment={action.fragment}
                onClick={() => this.selectAction(index)}
                key={`menu_action_${action.fragment}`}
              />
            );
          })}
        </div>
      </nav>
    );
  }
}
