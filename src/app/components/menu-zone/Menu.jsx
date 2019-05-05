import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/action-message-button/action-message-button.css';
import '../../styles/menu-zone/menu-zone.css';
import '../../styles/folders-list/folders-list.css';
import '../../styles/folders-list/__item/folders-list__item.css';
import '../../styles/folders-list/__item/folders-list__item_active.css';
import { receiveMessage } from '../../store/actions';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuTitles: ['Входящие', 'Отправленные', 'Удаленные', 'Спам', 'Черновики', 'Создать папку'],
      acitveIndex: 0
    };
  }

  render() {
    const foldersList = this.state.menuTitles.map((value, index) => (
      <li
        className={
          index === this.state.acitveIndex ? 'folders-list__item_active' : 'folders-list__item'
        }
        key={value}
      >
        {value}
      </li>
    ));

    return (
      <div className="menu-zone">
        <button
          id="create-message-button"
          className="action-message-button"
          type="button"
          name="create-message-button"
          onClick={() => this.props.addMessage(null)}
        >
          Написать
        </button>

        <ul className="folders-list">{foldersList}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.mailBox.messages
});

export default connect(
  mapStateToProps,
  { addMessage: receiveMessage }
)(Menu);
