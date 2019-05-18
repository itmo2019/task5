import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageText from './MessageText';
import PropTypes from 'prop-types';

class MessageBlock extends Component {
  render() {

    const pieceOfCode = this.props.messageOrText ?
      <MessageList
        messages={this.props.messages}
        changeSelected={this.props.changeSelected}
        messageListClass={this.props.messageListClass}
        showMessage={this.props.showMessage}
      />:
      <MessageText
        text={this.props.text}
        textClass={this.props.textClass}
        hideMessage={this.props.hideMessage}
      />;
    return (
      <div className={'main__message-block'}>
        <div className="message-block__row message-block__upper-row">
          <label className="check">
            <input
              className="check__input"
              type="checkbox"
              onChange={this.props.setCheckBoxes.bind(this)}
              checked={this.props.mainChecked}
            />
          </label>
          <button className="upper-row__btn tooltip">
            Переслать
            <span className="tooltip-text">Переслать</span>
          </button>
          <button className="upper-row__btn tooltip" onClick={this.props.deleteMessages.bind(this)}>Удалить
            <span className="tooltip-text">Удалить</span></button>
          <button className="upper-row__btn tooltip">
            Это спам
            <span className="tooltip-text">Удалить</span></button>
          <button className="upper-row__btn tooltip">Прочитано
            <span className="tooltip-text">Прочитано</span></button>
        </div>
        {pieceOfCode}
        <div className="message-block__lower-row">
          <div className="lower-row__item">Помощь и обратная связь</div>
          <div className="lower-row__item">Реклама</div>
          <div className="lower-row__item">copy2001-2018, Яндекс</div>
        </div>
      </div>
    );
  }
}

MessageBlock.propTypes = {
  messages: PropTypes.array.isRequired,
  text: PropTypes.object.isRequired,
  textClass: PropTypes.object.isRequired,
  messageListClass: PropTypes.object.isRequired,
  changeSelected: PropTypes.func.isRequired,
  hideMessage: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  deleteMessages: PropTypes.func.isRequired,
  setCheckBoxes: PropTypes.func.isRequired,
  mainChecked: PropTypes.object.isRequired,
  messageOrText: PropTypes.object.isRequired
};

export default MessageBlock;
