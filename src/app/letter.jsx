import React, { Component } from 'react';

import './app.css';

class Letter extends Component {
  render() {
    return (
      <div className="letter" onClick={() => this.props.onClick()}>
        <input type="checkbox" className="checkbox" />
        <div className="icon">
          <img
            src="https://icon-icons.com/icons2/652/PNG/32/yandex_cyr_icon-icons.com_59870.png"
            height="10%"
            className="letter__contact"
            alt="yaicon"
          />
        </div>
        <div className="from">
          <div className="text_overflow">{this.props.from}</div>
        </div>
        <div className="letter__checked" />
        <div className="theme">
          <div className="text_overflow">{this.props.theme}</div>
        </div>
        <div className="data">
          <div className="text_overflow">{this.props.date}</div>
        </div>
      </div>
    );
  }
}

export default Letter;
