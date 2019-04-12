import React from 'react';

import './message-creator.css';

class MessageCreator extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.props = props;
  //   // props.newMail;
  // }

  render() {
    return (
      <button className="header__message-creator" onClick={this.props.nmf}>
        Создать письмо
      </button>
    );
  }
}

export default MessageCreator;
