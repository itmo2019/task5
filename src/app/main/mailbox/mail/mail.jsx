import React, { Component } from 'react';

import './mail.css';

export class Mail extends Component {
  constructor(props) {
    super(props);
    this.trigger = React.createRef();
  }

  render() {
    const { mail, onClick, onAnimationEnd } = this.props;
    const checkboxId = `checkbox_${mail.id}`;

    return (
      <label
        ref={this.trigger}
        htmlFor="mailbox__trigger"
        onClick={onClick}
        role="row"
        tabIndex="0"
        onKeyDown={event => {
          if (event.key === 'Enter') {
            this.trigger.current.click();
          }
        }}
      >
        <div
          className={`mailbox__mail${!mail.old ? ' mail__new' : ''}`}
          data-state={mail.state}
          onAnimationEnd={onAnimationEnd}
        >
          <label className="checkbox" htmlFor={checkboxId}>
            <input
              type="checkbox"
              className="checkbox__input"
              id={checkboxId}
              onChange={event => mail.setCheck(event.target.checked)}
            />
            <span className="checkbox__span" />
          </label>
          <div className="mailbox__mail-element mail__pic">
            <img className="pic__img" alt="pic" src={mail.img} />
          </div>
          <div className="mailbox__mail-element mail__author">{mail.author}</div>
          <div className="mailbox__mail-element mail__dot" />
          <div className="mailbox__mail-element mail__title">{mail.title}</div>
          <time className="mailbox__mail-element mail__time">{mail.date}</time>
        </div>
      </label>
    );
  }
}

export default Mail;
