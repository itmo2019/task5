import React, {Component} from 'react';

import '../styles/animation.css';
import '../styles/body.css';
import '../styles/components.css';
import '../styles/fonts.css';
import '../styles/header.css';
import '../styles/mails-placeholder.css';
import '../styles/main.css';
import '../styles/navigation.css';


import {
  getRandomValue,
  generateNewMail
} from '../scripts/init-global-vars';

import {FooterItems} from './footer';

import {Mail, MainMenu, MailsToolbar, PreviewPlaceholder} from './componetns';


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

  deleteMail = (e) => {
    this.setState((state) => {
      state['mails'] = state.mails.filter((item) => !item.select);
      state['selectAll'] = false;
      return state;
    });
    /*
    this.state.selectAll = false;
    this.forceUpdate();
    console.log(this.state.selectAll);
    */
    /*
    let mailId = mail.getAttribute("id");

    this.setState((state) => {
      state['mails'] = state.mails.map((item) => {
        if (item.id.toString() !== mailId) {
          return {...item};
        }
        let tmp = {...item};
        tmp['delete'] = true;
        return tmp;
      });
      return state;
    });
    mail.addEventListener('transitionend', () => {
      this.setState((state) => {
        state['mails'] = state.mails.filter((item) => item.id.toString() !== mailId);
        return state;
      });
    });*/
  };

  readMail = () => {
    this.setState((state) => {
      state['mails'] = state.mails.map((item) => {
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
    console.log("ok");
  };
  showMailContent = (id, text) => (e) => {
    let target = e.target;
    if (target === undefined || target.getAttribute("data-delete") === null) {
      return;
    }
    this.setState((state) => {
      state['mailText'] = text;
      return state;
    });
    this.hidePlaceholders();
  };


  selectAll = () => {
    let value = !this.state.selectAll;
    console.log(value);
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
    console.log(this.state);
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
    let mails = this.state.mails.filter((item, index) => index < 30);
    console.log("redraw" + this.state.selectAll);
    return (
      <main className="main">
        <MainMenu addNewLetter={this.addNewMailByClick}/>
        <div className="mails-placeholder">
          <MailsToolbar selectAll={this.selectAll} allChecked={this.state.selectAll} deleteMail={this.deleteMail}
                        readMail={this.readMail}/>
          {
            this.state.placeholder ?
              <PreviewPlaceholder closeClick={this.hidePlaceholders} mailText={this.state.mailText}/> :
              <div id="mails-placeholder" className="list-of-mails">
                {mails.map((mail) => {
                  if (mail.delete === false) {
                    return <Mail key={mail.id.toString()}
                                 select={mail.select}
                                 image={mail.image}
                                 title={mail.title}
                                 text={mail.text}
                                 date={mail.date}
                                 id={mail.id}
                                 read={mail.read}
                                 clickMailContent={this.showMailContent}
                                 changeStateMail={this.changeStateMail(mail)}
                    />
                  }
                  else {
                    return <Mail key={mail.id.toString()}
                                 select={mail.select}
                                 image={mail.image}
                                 title={mail.title}
                                 text={mail.text}
                                 date={mail.date}
                                 id={mail.id}
                                 read={mail.read}
                                 clickMailContent={this.showMailContent}
                                 changeStateMail={this.changeStateMail(mail)}
                                 cls="delete-animation"
                    />
                  }
                })}
              </div>
          }
          <FooterItems/>
        </div>
      </main>
    );
  }
}
