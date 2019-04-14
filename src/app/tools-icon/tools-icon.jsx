import React, { Component } from 'react';

import './tools-icon.css';

import toolsIcon from '../../img/tools-icon.svg';

export class ToolsIcon extends Component {
  render() {
    return <img className="main-header-icon tools-icon" src={toolsIcon} alt="Меню сервисов" />;
  }
}
