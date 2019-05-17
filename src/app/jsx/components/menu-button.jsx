import {Component} from "react";
import React from "react";

import '../../styles/navigation.css';
import '../../styles/components.css';

export class MenuButton extends Component {
  render() {
    return (
      <button className="menu__action-button text_hide-by-size">{this.props.buttonName}</button>
    );
  }
}
