import React, { Component } from 'react';

import { Checker } from '../checker';

import '../content-menu/content-menu.css';
import '../content.css';

export class Email extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  openMessage = event => {
    if (!event.target.classList.contains('check-view')) {
      this.props.openF();
    }
  };

  render() {
    const {
      logo,
      title,
      preview,
      date,
      highlighted,
      checked,
      checkedAll,
      clickF,
      visible
    } = this.props;
    const textMod = highlighted ? ' emails-list__element_highlighted' : '';
    const isVisible = !visible ? ' emails-list__element_nonvisible' : '';
    const indMod = highlighted ? ' emails-list__read-circle-indicator_not-read' : '';
    return (
      <div
        role="button"
        aria-hidden
        onClick={this.openMessage}
        className={`emails-list__element${textMod}${isVisible}`}
        ref={this.ref}
      >
        <Checker
          checked={checked}
          checkedAll={checkedAll}
          clickF={clickF}
          parentMix="emails-list__check-view"
        />
        <div
          className="emails-list__logo"
          style={{
            background: `url(${logo}) center / 100% auto no-repeat`
          }}
        />
        <span className="emails-list__title">{title}</span>
        <div className={`emails-list__read-circle-indicator${indMod}`} />
        <span className="emails-list__preview">{preview}</span>
        <span className="emails-list__date">{date}</span>
      </div>
    );
  }
}
