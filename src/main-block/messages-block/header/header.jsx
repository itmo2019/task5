import React from 'react';

import './header.css';

class Header extends React.Component {
  render() {
    return <div className="messages-block-header">
      <input type="checkbox" className="checkbox" id="check-all" onClick={this.props.selectAll}/>
      <div className="messages-block-header__action">Переслать</div>
      <div className="messages-block-header__action" id="delete-messages" onClick={this.props.deleteSelected}>
        Удалить
      </div>
      <div className="messages-block-header__action">Это спам!</div>
      <div className="messages-block-header__action">Прочитано</div>
    </div>;
  }
}

export default Header;
