import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/action-message-button/action-message-button.css';
import '../../styles/menu-zone/menu-zone.css';
import '../../styles/folders-list/folders-list.css';
import '../../styles/folders-list/__item/folders-list__item.css';
import '../../styles/folders-list/__item/folders-list__item_active.css';
import {
  receiveMessage,
  setReceivedDisplayFormat,
  setSentDisplayFormat,
  setDeletedDisplayFormat,
  setSpamDisplayFormat,
  setDraftDisplayFormat,
  toggleMailBoxView,
} from '../../store/actions';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [
        {
          name: 'Входящие',
          action: () => {
            this.setState({ activeIndex: 0 });
            if (this.props.mailBoxView === 'opened-message') {
              this.props.toggleMailBoxView();
            }
            this.props.setReceivedDisplayFormat();
          }
        },
        {
          name: 'Отправленные',
          action: () => {
            this.setState({ activeIndex: 1 });
            if (this.props.mailBoxView === 'opened-message') {
              this.props.toggleMailBoxView();
            }
            this.props.setSentDisplayFormat();
          }
        },
        {
          name: 'Удаленные',
          action: () => {
            this.setState({ activeIndex: 2 });
            if (this.props.mailBoxView === 'opened-message') {
              this.props.toggleMailBoxView();
            }
            this.props.setDeletedDisplayFormat();
          }
        },
        {
          name: 'Спам',
          action: () => {
            this.setState({ activeIndex: 3 });
            if (this.props.mailBoxView === 'opened-message') {
              this.props.toggleMailBoxView();
            }
            this.props.setSpamDisplayFormat();
          }
        },
        {
          name: 'Черновики',
          action: () => {
            this.setState({ activeIndex: 4 });
            if (this.props.mailBoxView === 'opened-message') {
              this.props.toggleMailBoxView();
            }
            this.props.setDraftDisplayFormat();
          }
        },
        { name: 'Создать папку', action: () => {} }
      ],
      activeIndex: 0
    };
  }

  render() {
    const foldersList = this.state.menuItems.map(({ name, action }, index) => (
      <li
        className={
          index === this.state.activeIndex ? 'folders-list__item_active' : 'folders-list__item'
        }
        key={name}
      >
        <div onClick={action} onKeyPress={action} tabIndex="0" role="button">
          {name}
        </div>
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
  messages: state.mailBox.messages,
  mailBoxView: state.mailBox.mailBoxView
});

export default connect(
  mapStateToProps,
  {
    addMessage: receiveMessage,
    receiveMessage,
    setReceivedDisplayFormat,
    setSentDisplayFormat,
    setDeletedDisplayFormat,
    setSpamDisplayFormat,
    setDraftDisplayFormat,
    toggleMailBoxView
  }
)(Menu);
