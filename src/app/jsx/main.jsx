import React, {Component} from 'react';

import '../styles/fonts.css';
import '../styles/mails-placeholder.css';
import '../styles/main.css';
import '../styles/fonts.css';

import {
  getRandomValue,
  generateNewMail,
  MAX_MAILS_PER_PAGE
} from '../scripts/utils';

import {FooterItems} from './footer';
import {Mail} from  './components/mails';
import {MainMenu} from "./components/main-menu";
import {MailsToolbar} from "./components/mails-toolbar";
import {PreviewPlaceholder} from "./components/preview-placeholder";


export class MainPlaceholder extends Component {
  constructor() {
    super();

    this.state = {
      mails: [],
      placeholder: false,
      mailText: '',
      selectAll: false
    };
    this.commonId = 0;
    this.deleteMail = this.deleteMail.bind(this);
    this.newMail = this.newMail.bind(this);
    this.addNewMailByClick = this.addNewMailByClick.bind(this);
    this.selectAll = this.selectAll.bind(this);
  }

  componentDidMount() {
    this.newMail();
  }

  newMail = () => {
    this.addNewMailByClick();
    setTimeout(this.newMail, 5 * 1000 * 60 + getRandomValue(10, 1000 * 5));
  };

  addNewMailByClick = () => {
    this.setState((state) => {
      let mails = [...state.mails];
      mails.unshift(generateNewMail(this.commonId));
      this.commonId++;
      state['mails'] = mails;
      return state;
    });
  };

  deleteMail = () => {
    this.setState((state) => {
      let mails = [...state.mails];
      state['mails'] = mails.map((item) => {
        if (item.select) {
          item.select = false;
          item.delete = true;
        }
        return item;
      });
      state['selectAll'] = false;
      return state;
    });
  };

  onTransitionEnd = (id, was, animate) => () => {
    if (!animate) {
      this.setState((state) => {
        let mails = [...state.mails];
        state['mails'] = mails.map((item) => {
          if (item.id.toString() === id.toString()) {
            item['animate'] = true;
          }
          return item;
        });
        return state;
      });
    }
    if (!was) {
      return;
    }

    this.setState((state) => {
      let mails = [...state.mails];
      state['mails'] = mails.filter((item) => item.id.toString() !== id.toString());
      return state;
    });
  };

  readMail = () => {
    this.setState((state) => {
      let mails = [...state.mails];
      state['mails'] = mails.map((item) => {
          let tmp = item;
          if (item.select) {
            tmp.select = false;
            tmp.read = true;
          }
          return tmp;
        }
      )
      ;
      state['selectAll'] = false;
      return state;
    });
  };
  showMailContent = (id, text) => (e) => {
    let target = e.target;
    if (target === undefined || target.getAttribute("data-delete") === null) {
      return;
    }
    this.setState((state) => {
      let mails = [...state.mails];
      state['mails'] = mails.map((item) => {
        if (item.id.toString() === id.toString()) {
          item['read'] = true;
        }
        return item;
      });
      state['mailText'] = text;
      return state;
    });
    this.hidePlaceholders();
  };


  selectAll = () => {
    let value = !this.state.selectAll;
    this.setState((state) => {
      let mails = [...state.mails];
      mails.forEach(item => {
        item.select = value;
      });
      state['selectAll'] = value;
      state['mails'] = mails;
      return state;
    });
    this.state.selectAll = value;
    this.forceUpdate();
  };

  hidePlaceholders = () => {
    this.setState((state) => {
      state['placeholder'] = !state.placeholder;
      return state;
    });
  };

  changeStateMail = (mail) => () => {
    mail['select'] = !mail['select'];
    this.forceUpdate();
  };

  render() {
    let mails = this.state.mails.slice(0, MAX_MAILS_PER_PAGE);
    return (
      <main className="main">
        <MainMenu addNewLetter={this.addNewMailByClick}/>
        <div className="mails-placeholder">
          <MailsToolbar selectAll={this.selectAll}
                        allChecked={this.state.selectAll}
                        deleteMail={this.deleteMail}
                        readMail={this.readMail}/>
          {
            this.state.placeholder ?
              <PreviewPlaceholder closeClick={this.hidePlaceholders} mailText={this.state.mailText}/> :
              <div className="list-of-mails">
                {mails.map((mail) => <Mail key={mail.id.toString()}
                                           select={mail.select}
                                           image={mail.image}
                                           title={mail.title}
                                           text={mail.text}
                                           date={mail.date}
                                           id={mail.id}
                                           read={mail.read}
                                           delete={mail.delete}
                                           created={mail.created}
                                           animate={mail.animate}
                                           clickMailContent={this.showMailContent}
                                           changeStateMail={this.changeStateMail(mail)}
                                           onTransitionEnd={this.onTransitionEnd}/>
                )}
              </div>
          }
          <FooterItems/>
        </div>
      </main>
    );
  }
}
