import React, { Component } from 'react';

import './new-page.css';

export class NewPage extends Component {
  render() {
    const modifier = `new-page content-block__new-page${this.props.opened ? ' new-page_open' : ''}`;
    const pars = this.props.text.map(p => {
      return <p className="new-page-content__text">{p}</p>;
    });
    return (
      <div className={modifier}>
        <div className="new-page-content">
          <div
            className="new-page-content__close-page-icon"
            role="button"
            aria-hidden
            onClick={this.props.closeF}
          />
          {pars}
        </div>
      </div>
    );
  }
}
