import React, { Component } from 'react';

import './buttons-list.css';

import { Button } from './button';

export class ButtonsList extends Component {
  render() {
    return (
      <ul className="buttons-list menu__buttons-list">
        <Button name="Написать" styleModifier="buttons-list__element_new-message-button" />
        <Button name="Входящие" />
        <Button name="Отправленные" />
        <Button name="Длинное поле для этого меню в почте" />
        <Button name="Спам" />
        <Button name="Написать" />
        <Button name="Черновики" />
        <Button name="Создать папку" />
      </ul>
    );
  }
}
