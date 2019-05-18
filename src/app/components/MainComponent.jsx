import React, { Component } from 'react';
import './main.css'
import PropTypes from 'prop-types';
import MessageBlock from './MessageBlock';

class MainComponent extends Component {
  render() {
    return (
      <div className={'main'}>
        <div className="main__left-column">
          <form>
            <button className="left-column__btn_write">Написать</button>
          </form>
          <div className="left-column__btn-group">
            <button className={'btn-group__control-button'}>Входящие</button>
            <button className={'btn-group__control-button'}>Отправленные</button>
            <button className={'btn-group__control-button'}>Удалённые</button>
            <button className={'btn-group__control-button'}>Спам</button>
            <button className={'btn-group__control-button'}>Черновики</button>
            <button className={'btn-group__control-button'}>Создать папку</button>
          </div>
        </div>
        <MessageBlock
          messages={this.props.messages}
          text={this.props.text}
          textClass={this.props.textClass}
          messageListClass={this.props.messageListClass}
          changeSelected={this.props.changeSelected}
          hideMessage={this.props.hideMessage}
          showMessage={this.props.showMessage}
          deleteMessages={this.props.deleteMessages}
          setCheckBoxes={this.props.setCheckBoxes}
          mainChecked={this.props.mainChecked}
          messageOrText={this.props.messageOrText}
        />
      </div>
    );
  }
}

MainComponent.propTypes = {
  text: PropTypes.object.isRequired,
  textClass: PropTypes.object.isRequired,
  messageListClass: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  changeSelected: PropTypes.func.isRequired,
  hideMessage: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  deleteMessages: PropTypes.func.isRequired,
  setCheckBoxes: PropTypes.func.isRequired,
  mainChecked: PropTypes.object.isRequired,
  messageOrText: PropTypes.object.isRequired
}

export default MainComponent;
