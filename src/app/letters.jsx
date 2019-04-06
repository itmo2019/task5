import React, { Component } from 'react';
import { Letter } from './letter';
import { LettersPanel } from './letters-panel';
import { LettersFooter } from './letters-footer';
import '../common.blocks/letters.css';
import '../common.blocks/letters__control-checkbox.css';
import { Essay } from './essay';

export class Letters extends Component {
  constructor(props) {
    super(props);

    this.updateLetter = props.updateLetter;
  }

  deleteSelected = () => {
    this.updateLetter(old =>
      old.map(x => {
        if (x.data.checked) {
          const copy = Object.assign({}, x);
          copy.deleted = true;
          return copy;
        }
        return x;
      })
    );
    setTimeout(this.removeDeleted, 2000);
  };

  removeDeleted = () => {
    this.updateLetter(it => it.filter(x => !x.deleted));
  };

  checkItem = id => {
    this.updateLetter(it =>
      it.map(x => {
        if (x.id === id) {
          const copy = Object.assign({}, x);
          copy.data.checked = !copy.data.checked;
          return copy;
        }
        return x;
      })
    );
  };

  checkAll = () => {
    const cur = this.isAllSelected(this.props.letters);
    this.updateLetter(letters =>
      letters.map(it => {
        const copy = Object.assign({}, it);
        copy.data.checked = !cur;
        return copy;
      })
    );
  };

  isAllSelected = letters => letters.reduce((acc, next) => acc && next.data.checked, true);

  render() {
    return (
      <div className="letters">
        <LettersPanel
          deleteSelected={this.deleteSelected}
          checkAll={this.checkAll}
          isAllSelected={this.isAllSelected(this.props.letters)}
        />
        <input className="letters__control-checkbox" id="open-task-1" type="checkbox"/>
        <div className="letters__inbox">
          {this.props.letters.map(x => (
            <Letter
              key={x.id}
              id={x.id}
              data={x.data}
              unread={x.unread}
              special={x.special}
              deleted={x.deleted}
              added={x.added}
              check={this.checkItem}
            />
          ))}
        </div>
        <Essay />
        <LettersFooter/>
      </div>
    );
  }
}
