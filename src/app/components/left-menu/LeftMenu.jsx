import React, { Component } from 'react';
import { MenuAction } from './MenuAction';

import '../../styles/left-menu/LeftMenu.css'

export class LeftMenu extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentlySelectedActionID: 0,
    }
  }
  
  selectAction(selectedActionId /*:number */) {
    this.setState({
      currentlySelectedActionID: selectedActionId
    })
  }
  
  render() {
    return (
      <nav className="left-menu">
      <button className="new-message-btn">Написать</button>
      <div className="menu-actions">
        {
          actions.map((action, index) => {
            return <MenuAction 
              title={action.title}
              isSelected={index === this.state.currentlySelectedActionID}
              fragment={action.fragment}
              onClick={() => this.selectAction(index)}
              key={`menu_action_${index}`}
              />
          })
        }
      </div>
      </nav>
    )  
  }
}

const actions = [
  { title: 'Входящие', fragment: 'inbox' },
  { title: 'Отправленные', fragment: 'sent' },
  { title: 'Удалённые', fragment: 'deleted' },
  { title: 'Спам', fragment: 'spam' },
  { title: 'Черновики', fragment: 'drafts' },
  { title: 'Создать папку', fragment: 'createfldr' },
  { title: 'Очень длинная команда, ну просто очень длинная, самая длинная здесь',
    fragment: 'longcmd' },
]
