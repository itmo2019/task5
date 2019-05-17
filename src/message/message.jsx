import React, { Component } from 'react';
import './message.css';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.onMarkAsRead = this.onMarkAsRead.bind(this);

    this.state = {
      insertAnim: true
    };
    setTimeout(() => {
      this.setState({ insertAnim: false });
    }, 500);
  }

  onMarkAsRead = e => {
    this.props.onMarkAsRead(this.props.letter.id);
    e.stopPropagation();
  };

  render() {
    const handleEnterKey = (e, handler, ...args) => {
      if (e.keyCode === 13) {
        handler(...args);
      }
    };

    const dateStr = this.props.letter.date.toLocaleDateString('ru-RU', {
      month: 'short',
      day: 'numeric'
    });
    return (
      <section
        className={`messages__message ${this.state.insertAnim ? 'insert-anim' : ''} ${
          this.props.letter.isDeleting ? 'start-del-anim' : ''
        }`}
      >
        <label htmlFor={`message-checkbox-${this.props.letter.id}`}>
          <input
            type="checkbox"
            className="message__base-checkbox"
            checked={this.props.letter.checked}
            id={`message-checkbox-${this.props.letter.id}`}
            onChange={e => {
              this.props.onCheckedChanged(this.props.letter.id, !this.props.letter.checked);
              e.stopPropagation();
            }}
          />
          <div
            className="checkbox-container"
            onClick={e => e.stopPropagation()}
            role="presentation"
          >
            <div className="checkbox message__checkbox" />
          </div>
        </label>
        <a
          href="#message"
          title={this.props.letter.author}
          onClick={() => this.props.onClick(this.props.letter.id)}
        >
          <div className="message__author-img">{this.props.letter.author[0].toUpperCase()}</div>
        </a>
        <a
          href="#message"
          title="example@yandex.ru"
          onClick={() => this.props.onClick(this.props.letter.id)}
          className={`message__author ${this.props.letter.read ? '' : 'message__author_unread'}`}
        >
          {this.props.letter.author}
        </a>
        {this.props.letter.read ? (
          ''
        ) : (
          <div
            href="#inbox"
            title="Отметить как прочитанное"
            className="message__unread-marker"
            role="button"
            tabIndex="0"
            onKeyDown={e => handleEnterKey(e, this.onMarkAsRead, e)}
            onClick={this.onMarkAsRead}
          />
        )}
        <a
          href="#message"
          title={this.props.letter.topic}
          onClick={() => this.props.onClick(this.props.letter.id)}
          className={`message__title ${this.props.letter.read ? '' : 'message__title_unread'}`}
        >
          {this.props.letter.topic}
        </a>
        <a
          href="#message"
          title={`Получено ${dateStr}`}
          onClick={() => this.props.onClick(this.props.letter.id)}
        >
          <time
            dateTime={this.props.letter.date.toISOString().slice(0, 10)}
            className="message__date"
          >
            {dateStr}
          </time>
        </a>
      </section>
    );
  }
}
