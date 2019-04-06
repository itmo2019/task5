import React, { Component } from 'react';
import './main.css'
import MessageBlock from './MessageBlock';
import PropTypes from 'prop-types';

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
        <MessageBlock messages={this.props.messages}/>
      </div>
    );
  }
}

MainComponent.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default MainComponent;
