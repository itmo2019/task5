import React, { Component } from 'react';

import './allFunctions.css';

const actions = [
  { title: 'Получить', act: 'get-letter' },
  { title: 'Удалить', act: 'remove' },
  { title: 'Переслать', act: 'resend' },
  { title: 'Это спам', act: 'spam' },
  { title: 'Прочитано', act: 'read' }
];

export class AllFunctions extends Component {
  constructor(props) {
    super(props);
    this.newMailOnClick = this.props.newMailOnClick.bind(this);
    this.deleteLetter = this.props.deleteLetter.bind(this);
    this.selectAll = this.props.selectAll.bind(this);
  }

  render() {
    return (
      <div className="main-block__mail-functions clearfix">
        <input
          type="checkbox"
          className="check"
          checked={this.props.isChecked}
          onChange={() => {
            if (!this.props.isLetterOpened) this.selectAll();
          }}
        />
        <ul className="main-block__all-function">
          {actions.map(action => {
            return (
              <li className="main-block__func" key={action.act}>
                <button
                  type="button"
                  id={action.act}
                  className="main-block__ref-func"
                  onClick={() => {
                    if (action.act === 'get-letter' && !this.props.isLetterOpened)
                      this.newMailOnClick();
                    if (action.act === 'remove' && !this.props.isLetterOpened) this.deleteLetter();
                  }}
                >
                  {action.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
