import React, { Component } from 'react';

import './letters.css';
import Letter from '../letter';

export class Letters extends Component {
  render() {
    return (
      <div id="letters">
        {this.props.letters.map(x => (
          <Letter
            id={x.id}
            title={x.title}
            sender={x.sender}
            unread={x.unread}
            avatar={x.avatar}
            text={x.text}
            receiveTime={x.receiveTime}
            checked={x.checked}
            check={this.props.selectLetter}
          />
        ))}
      </div>
    );
  }
}

export default Letters;
