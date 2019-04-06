import React, { Component } from 'react';
import MessageList from './MessageList';
import PropTypes from 'prop-types';

class MessageBlock extends Component {
  render() {
    return (
      <div className={'main__message-block'}>
        <div className="message-block__row message-block__upper-row">
          <label className="check">
            <input className="check__input" type="checkbox" onChange="setCheckBoxes()"></input>
          </label>
          <button className="upper-row__btn tooltip">Переслать
            <span className="tooltip-text">Переслать</span>
          </button>
          <button className="upper-row__btn tooltip" onClick="deleteMessages()">Удалить
            <span className="tooltip-text">Удалить</span></button>
          <button className="upper-row__btn tooltip">Это спам
            <span className="tooltip-text">Удалить</span></button>
          <button className="upper-row__btn tooltip">Прочитано
            <span className="tooltip-text">Прочитано</span></button>
        </div>
        <MessageList messages={this.props.messages}/>
        <div className="message-block__lower-row">
          <div className="lower-row__item">Помощь и обратная связь</div>
          <div className="lower-row__item">Реклама</div>
          <div className="lower-row__item">&copy2001-2018, Яндекс</div>
        </div>
      </div>
    );
  }
}

MessageBlock.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default MessageBlock;
