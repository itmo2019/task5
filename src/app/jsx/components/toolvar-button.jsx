import {Component} from "react";
import React from "react";

import '../../styles/mails-placeholder.css';
import '../../styles/components.css';

export class ToolbarButton extends Component {
  render() {
    return (
      <button className="mails-action__button mails-action__item text_hide-by-size" onClick={this.props.clickFunc}>
        {this.props.buttonName}
      </button>
    );
  }
}
