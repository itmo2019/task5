import React, { Component } from 'react';
import classNames from 'classnames';
import { FullMessage } from '../full-message';
import { ShortMessage } from '../short-message';

export class Message extends Component {
  constructor(props) {
    super(props);
    this.content = props.content;
    this.avatar = props.avatar;
    this.sender = props.sender;
    this.topic = props.topic;
    this.date = props.date;
    this.fullMessage = React.createRef();
    this.shortMessage = React.createRef();
    this.readMessage = this.readMessage.bind(this);
    this.parentToggling = props.toggleMessages;
    this.closeMessage = this.closeMessage.bind(this);
    this.tickMessage = this.tickMessage.bind(this);
    this.fadeOutMessage = this.fadeOutMessage.bind(this);
    this.state = {
      fadeOut: true,
      isTicked: false
    };
  }

  componentDidMount() {
    this.timerID = setTimeout(() => this.setState({ fadeOut: false }), 0);
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  readMessage() {
    this.parentToggling();
    this.fullMessage.current.setState({ isVisible: true });
    this.shortMessage.current.setState({ wasRead: true });
  }

  toggleMessage() {
    this.shortMessage.current.setState(state => {
      return { isVisible: !state.isVisible };
    });
  }

  closeMessage() {
    this.parentToggling();
    this.fullMessage.current.setState({ isVisible: false });
  }

  tickMessage() {
    this.setState(state => {
      return { isTicked: !state.isTicked };
    });
  }

  fadeOutMessage() {
    this.setState({ fadeOut: true });
  }

  render() {
    return (
      <li className={classNames('Message', this.props.className)}>
        <FullMessage ref={this.fullMessage} text={this.content} closeMessage={this.closeMessage} />
        <ShortMessage
          ref={this.shortMessage}
          avatar={this.avatar}
          sender={this.sender}
          topic={this.topic}
          date={this.date}
          handleClick={this.readMessage}
          handleTick={this.tickMessage}
          fadeOut={this.state.fadeOut}
          isTicked={this.state.isTicked}
        />
      </li>
    );
  }
}
