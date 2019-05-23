import React, { Component } from 'react';

import './content.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ContentMenu } from './content-menu';
import { NewPage } from './new-page';
import { Footer } from './footer';
import { generateEmail } from '../../scripts/generator';

import { Email } from './email';

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selectAllChecker: false,
      opened: false,
      text: ['']
    };
    this.lastMessageTime = Math.floor(Math.random() * 590 + 10);
    this.n = 5;
  }

  componentDidMount() {
    this.newMail();
  }

  componentWillUnmount() {
    this.items.clear();
  }

  newMail = () => {
    const from = this.lastMessageTime < 3000 ? 3000 - this.lastMessageTime : 10;
    this.lastMessageTime = Math.floor(Math.random() * (6000 - from) + from);
    this.add();
    setTimeout(this.newMail, this.lastMessageTime);
  };

  add = () => {
    const newEmail = generateEmail();
    this.state.items.unshift(newEmail);
    if (this.state.items.length > this.n) {
      this.state.items[this.n].visible = false;
      this.state.items[this.n].checked = false;
    }
    this.setState(prevState => ({
      items: prevState.items,
      selectAllChecker: false,
      opened: prevState.opened,
      text: prevState.text
    }));
  };

  selectOne = prevEmail => () => {
    const newEmail = prevEmail;
    if (this.state.selectAllChecker) {
      this.state.selectAllChecker = false;
    }
    newEmail.checked = !newEmail.checked;
    this.forceUpdate();
  };

  selectAll = () => {
    if (this.state.opened) {
      return;
    }
    const newAll = !this.state.selectAllChecker;
    this.setState(prevState => {
      const newState = prevState;
      const { items } = newState;
      for (let i = 0; i < this.n && i < items.length; i++) {
        items[i].checked = newAll;
      }
      newState.selectAllChecker = newAll;
      newState.items = items;
      return newState;
    });
  };

  deleteEMail = () => {
    if (this.state.opened) {
      return;
    }
    this.setState(prevState => {
      const newState = prevState;
      const { items } = newState;
      let cur = 0;
      const len = items.length;
      for (let i = 0; i < this.n && i < len; i++) {
        if (items[cur].checked) {
          items.splice(cur, 1);
          cur--;
          if (items.length > this.n) {
            items[this.n - 1].visible = true;
          }
        }
        cur++;
      }
      newState.selectAllChecker = false;
      newState.items = items;
      return newState;
    });
  };

  openMessage = prevEmail => () => {
    const newEmail = prevEmail;
    newEmail.highlighted = false;
    this.setState(prevState => ({
      items: prevState.items,
      selectAllChecker: prevState.selectAllChecker,
      opened: true,
      text: newEmail.text
    }));
  };

  closeMessage = () => {
    this.setState(prevState => ({
      items: prevState.items,
      selectAllChecker: prevState.selectAllChecker,
      opened: false,
      text: ['']
    }));
  };

  render() {
    const ems = this.state.items;
    const emails = ems.map(item => {
      return (
        <Email
          logo={item.logo}
          title={item.title}
          preview={item.preview}
          date={item.date}
          highlighted={item.highlighted}
          checked={item.checked}
          checkedAll={false}
          clickF={this.selectOne(item)}
          key={item.id}
          openF={this.openMessage(item)}
          visible={item.visible}
        />
      );
    });

    return (
      <div className="content-block app__content-block">
        <ContentMenu
          delF={this.deleteEMail}
          checked={this.state.selectAllChecker}
          checkedAll
          clickF={this.selectAll}
        />
        <NewPage closeF={this.closeMessage} text={this.state.text} opened={this.state.opened} />
        <div className={`emails-block${this.state.opened ? ' emails-block_invisible' : ''}`}>
          <ul className="emails-list emails-block__emails-list">
            <ReactCSSTransitionGroup
              transitionName="animated"
              transitionEnterTimeout={1300}
              transitionLeaveTimeout={1300}
            >
              {emails}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
