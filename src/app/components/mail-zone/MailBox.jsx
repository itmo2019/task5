import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MailBoxActions } from './MailBoxActions';
import {
  toggleSelectMessages,
  receiveMessage,
  deleteMessages,
  spamMessages,
  readMessages,
  toggleMailBoxView,
  toggleAllMessagesSelect
} from '../../store/actions';
import MessagesList from './MessagesList';
import OpenedMessage from './OpenedMessage';

import '../../styles/mail-box/mail-box.css';

function throttle(time, callback) {
  let busy = false;
  return () => {
    if (!busy) {
      callback();
      busy = true;
      setTimeout(() => {
        busy = false;
      }, time + Math.random() * 500);
    }
  };
}

const periodicFunctionCall = func => {
  const throttledFunc = throttle(500 * 60, func);
  return setInterval(() => {
    throttledFunc();
  }, 1000);
};

class MailBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openedMessage: -1
    };

    periodicFunctionCall(() => this.props.receiveMessage(null));
  }

  onOpenMessage(messageId) {
    this.setState({ openedMessage: messageId });
    this.props.toggleMailBoxView();
    if (this.props.allMessagesSelect) {
      this.props.toggleAllMessagesSelect();
    }
  }

  onCloseMessage() {
    this.setState({ openedMessage: -1 });
    this.props.toggleMailBoxView();
    if (this.props.allMessagesSelect) {
      this.props.toggleAllMessagesSelect();
    }
  }

  render() {
    return (
      <div className="mail-box">
        <MailBoxActions
          onCheckBoxChange={() => {
            this.props.onCheckBoxChange(
              this.props.messages
                .map(message => {
                  if (message.isSelected === this.props.allMessagesSelect) {
                    return message.id;
                  }
                  return -1;
                })
                .filter(id => id !== -1)
            );
            this.props.toggleAllMessagesSelect();
          }}
          actionsList={[
            { name: 'Переслать', action: () => {} },
            {
              name: 'Удалить',
              action: () => {
                this.props.deleteMessages(
                  this.props.messages
                    .map(message => {
                      if (message.isSelected) {
                        return message.id;
                      }
                      return -1;
                    })
                    .filter(id => id !== -1)
                );
              }
            },
            {
              name: 'Это спам!',
              action: () => {
                this.props.spamMessages(
                  this.props.messages
                    .map(message => {
                      if (message.isSelected) {
                        return message.id;
                      }
                      return -1;
                    })
                    .filter(id => id !== -1)
                );
              }
            },
            {
              name: 'Прочитано',
              action: () => {
                this.props.readMessages(
                  this.props.messages
                    .map(message => {
                      if (message.isSelected) {
                        return message.id;
                      }
                      return -1;
                    })
                    .filter(id => id !== -1)
                );
              }
            }
          ]}
          selectedAll={this.props.allMessagesSelect}
        />
        {this.state.openedMessage !== -1 && this.props.mailBoxView === 'opened-message' ? (
          <OpenedMessage
            message={this.props.messages.find(message => message.id === this.state.openedMessage)}
            onCloseMessage={() => this.onCloseMessage()}
          />
        ) : (
          <MessagesList
            onCheckBoxChange={ids => {
              this.props.onCheckBoxChange(ids);
              if (this.props.allMessagesSelect) {
                this.props.toggleAllMessagesSelect();
              }
            }}
            onOpenMessage={messageId => this.onOpenMessage(messageId)}
            messages={this.props.messages}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.mailBox.messages.filter(message => {
      for (const key of Object.keys(state.displayFormat)) {
        if (message[key] !== state.displayFormat[key]) {
          return false;
        }
      }
      return true;
    }),
    displayFormat: state.displayFormat,
    mailBoxView: state.mailBox.mailBoxView,
    allMessagesSelect: state.mailBox.allMessagesSelect
  };
};

export default connect(
  mapStateToProps,
  {
    onCheckBoxChange: ids => toggleSelectMessages(ids),
    receiveMessage,
    deleteMessages,
    spamMessages,
    readMessages,
    toggleMailBoxView,
    toggleAllMessagesSelect
  }
)(MailBox);
