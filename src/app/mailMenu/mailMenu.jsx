import React, { Component } from 'react';

import './mailMenu.css';
import { Button } from '../button';

export class MailMenu extends Component {
  render() {
    return (
      <ul className="mailMenu__actionsBlock">
        <Button name="Входящие" />
        <Button name="Отправленные" />
        <Button name="Удаленные" />
        <Button name="Спам" />
        <Button name="Черновики" />
        <Button name="Создать папку" />
      </ul>
    );
  }
}
