import React, {Component} from 'react';

import '../styles/animation.css';
import '../styles/body.css';
import '../styles/components.css';
import '../styles/fonts.css';
import '../styles/header.css';
import '../styles/mails-placeholder.css';
import '../styles/main.css';
import '../styles/navigation.css';

import logo from '../images/default.svg';
import circle from '../images/circle.png';

import {
  findMail,
  fromTemplate,
  getRandomValue,
  innerTemplate,
  randomDate,
  selectAll,
  titlesTemplate
} from '../scripts/init-global-vars';
import {FooterItems} from './footer';

import {Mail, MainMenu, MailsToolbar} from './componetns';


function PreviewPlaceholder(props) {
  return (
    <div className="inner-mail-viewer">
      <div className="placeholder-for-close-button" onClick={props.closeClick}>X</div>
      <div className="circle"><img src={circle} height="200" width="200"/></div>
      <div id="mail-full-content" className="mail-content">
        {props.mailText}
      </div>
    </div>
  );
}

export class MainPlaceholder extends Component {
  constructor() {
    super();

    this.state = {
      mails: [],
      placeholder: false,
      mailText: ''
    };
    this.commonId = 0;
    this.deleteMail = this.deleteMail.bind(this);
    this.newMail = this.newMail.bind(this);
    this.addNewMailByClick = this.addNewMailByClick.bind(this);
  }

  componentDidMount() {
    this.newMail();
  }

  newMail = () => {
    this.addNewMailByClick();
    setTimeout(this.newMail, 5 * 1000 * 60 + getRandomValue(10, 1000 * 5));
  };

  addNewMailByClick = () => {
    let mail = {
      id: this.commonId,
      select: false,
      image: (() => {
        if (Math.random() >= 0.5) {
          return "//yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg";
        } else {
          return logo;
        }
      })(),
      title:
        fromTemplate[getRandomValue(0, fromTemplate.length - 1)],
      text:
        titlesTemplate[getRandomValue(0, titlesTemplate.length - 1)] + " " + innerTemplate[getRandomValue(0, innerTemplate.length - 1)],
      date:
        randomDate(new Date(2007, 1, 1), new Date()).toLocaleDateString("ru-RU", {
          month: 'short',
          day: 'numeric'
        }),
      delete: false
    };

    this.setState((state) => {
      let mails = [...state.mails];
      mails.push(mail);
      this.commonId++;
      state['mails'] = mails;
      return state;
    });
  };

  deleteMail = (mail) => {
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
    });
  };

  showMailContent = (id, text) => (e) => {
    let target = e.target;
    if (target === undefined || target.getAttribute("data-delete") === null) {
      return;
    }
    console.log(id, text);
    this.setState((state) => {
      state['mailText'] = text;
      return state;
    });
    this.hidePlaceholders();
    /*
    let mail = findMail(target);
    if (mail === null) {
      return;
    }
    console.log(mail);
    this.setState((state) => {
      return state
    });
    this.hidePlaceholders();*/
  };

  hidePlaceholders = () => {
    this.setState((state) => {
      let placeholder = !state.placeholder;
      return {
        mails: state.mails,
        placeholder: placeholder
      };
    });
  };

  render() {
    let mails = this.state.mails.filter((item, index) => index < 30);
    return (
      <main className="main">
        <MainMenu addNewLetter={this.addNewMailByClick}/>
        <div className="mails-placeholder">
          <MailsToolbar deleteMail={this.deleteMail}/>
          {
            this.state.placeholder ?
              <PreviewPlaceholder closeClick={this.hidePlaceholders} mailText={this.state.mailText}/> :
              <div id="mails-placeholder" className="list-of-mails">
                {mails.map((mail) => {
                  if (mail.delete === false) {
                    return <Mail select={mail.select}
                                 image={mail.image}
                                 title={mail.title}
                                 text={mail.text}
                                 date={mail.date}
                                 id={mail.id}
                                 mailContent={this.showMailContent}
                    />
                  }
                  else {
                    return <Mail select={mail.select}
                                 image={mail.image}
                                 title={mail.title}
                                 text={mail.text}
                                 date={mail.date}
                                 id={mail.id}
                                 mailContent={this.showMailContent}
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
