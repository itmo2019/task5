import React, { Component } from 'react';

export class MenuAction extends Component {
  render() {
    const ifSelectedClassName = this.props.isSelected ? 'selected-menu-action' : '';
    return (
      <div className="menu-action-wrapper">
        <div className={`menu-action-wrapper__action ${ifSelectedClassName}`}>
          <a
            className="menu-action-wrapper__link"
            href={`#${this.props.fragment}`}
            onClick={this.props.onClick}
          >
            {this.props.title}
          </a>
        </div>
      </div>
    );
  }
}
