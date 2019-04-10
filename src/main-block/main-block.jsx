import React from 'react';

import './main-block.css';
import LeftMenu from './left-menu/left-menu';
import MessagesBlock from './messages-block/messages-block';

class MainBlock extends React.Component {
  render() {
    return <div className="mail-page__main-block">
      <LeftMenu/>
      <MessagesBlock selectAll={this.props.selectAll} selectCheckbox={this.props.selectCheckbox}
                     deleteSelected={this.props.deleteSelectedMessages} messagesList={this.props.messagesList}
                     closeMessage={this.props.closeMessage} messageIsOpen={this.props.messageIsOpen}
                     openMessage={this.props.openMessage}
      />
    </div>;
  }
}

export default MainBlock;
