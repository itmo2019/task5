import React, { Component } from 'react';
import './full-message.css';
import classNames from 'classnames';
import closeLogo from '../../resources/img/close.png';

export class FullMessage extends Component {
  constructor(props) {
    super(props);
    this.closeMessage = props.closeMessage;
    this.text = props.text;
    this.state = {
      isVisible: false
    };
  }

  render() {
    const isDisplayed = this.state.isVisible ? '' : 'FullMessage_NonDisplayed';
    return (
      <div className={classNames('FullMessage', this.props.className, isDisplayed)}>
        <button className="FullMessage__CloseButton" type="button" onClick={this.closeMessage}>
          <img className="FullMessage__CloseLogo" src={closeLogo} alt="Закрыть" />
        </button>
        <div className="FullMessage__Text">{this.text}</div>
      </div>
    );
  }
}
