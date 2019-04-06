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

import {titlesTemplate, fromTemplate, innerTemplate, getRandomValue} from '../scripts/init-global-vars';


class MainMenu extends Component {
  render() {
    return (
      <div className="menu">
        <button className="menu__write-letter-button text_hide-by-size">Написать</button>
        <nav className="menu__navigate-by-action">
          <button className="menu__action-button text_hide-by-size">Входящие</button>
          <button className="menu__action-button text_hide-by-size">Отправленные</button>
          <button className="menu__action-button text_hide-by-size">Удалённые</button>
          <button className="menu__action-button text_hide-by-size">Спам</button>
          <button className="menu__action-button text_hide-by-size">Черновики</button>
          <button className="menu__action-button text_hide-by-size">Создать папку</button>
          <button className="menu__action-button text_hide-by-size" onClick={this.props.addNewLetter}>ДОБАВИТЬ
            НОВОЕ
            ПИСЬМО
          </button>
        </nav>
      </div>
    );
  }
}

function TemplateMail(props) {
  return (
    <div
      className={props.cls ? "mail mail_status_not-read delete-animation " + props.cls : "mail mail_status_not-read"}
      data-delete id={props.id}>
      <div className="mail__item mail__select">
        <label className="mails-checkbox">
          <input className="mails-checkbox__checkbox" type="checkbox" data-checkbox-select/>
          <span className="mails-checkbox__alternative-drawing">
          </span>
        </label>
      </div>
      <img className="mail__item mail__logo" src={props.image}/>
      <div className="mail__item mail__title text_hide-by-size" data-delete>{props.title}</div>
      <div className="mail__item mail__text-message text_hide-by-size" data-delete>{props.text}</div>
      <div className="mail__item mail__receive-time text_hide-by-size" data-delete>{props.date}</div>
    </div>

  );
}

const findMail = (element) => {
  let tmp = element;
  while (tmp !== null) {
    let classes = tmp.classList;
    if (classes.contains('mail')) {
      return tmp;
    }
    tmp = tmp.parentNode;
  }
  return null;
};

const selectAll = (e) => {
  let checkBox = document.querySelectorAll("[data-checkbox-select]");
  Array.from(checkBox).forEach(item => item.checked = e.target.checked);
};

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

class MailsAction extends Component {
  constructor(props) {
    super(props);
  }

  deleteSelected = (e) => {
    let tmp = document.querySelectorAll("[data-checkbox-select]");
    let checkBox = Array.from(tmp).filter(item => item.checked);
    checkBox.map(item => findMail(item)).filter(item => item !== null).forEach(item => this.props.deleteMail(item));
  };

  render() {
    return (
      <div className="mails-action">
        <div className="mails-action__item">
          <label className="mails-checkbox">
            <input className="mails-checkbox__checkbox" onChange={selectAll} type="checkbox"/>
            <span className="mails-checkbox__alternative-drawing">
            </span>
          </label>
        </div>
        <button className="mails-action__button mails-action__item text_hide-by-size">
          Переслать
        </button>
        <button className="mails-action__button mails-action__item text_hide-by-size" onClick={this.deleteSelected}>
          Удалить
        </button>
        <button className="mails-action__button mails-action__item text_hide-by-size">
          Это спам!
        </button>
        <button className="mails-action__button mails-action__item text_hide-by-size">
          Прочитано
        </button>
      </div>
    );
  }

}

function PreviewPlaceholder(props) {
  return (
    <div className="inner-mail-viewer">
      <div className="placeholder-for-close-button" onClick={props.closeClick}>X</div>
      <div className="circle"><img src={circle} height="200" width="200"/></div>
      Круг -- геометрическое место точек плоскости, расстояние от которых до заданной точки<br/>
      называется центром круга не превышает заданного неотрицательного числа,<br/>
      называемого радиусом этого круга.<br/>
      Если радиус равен нулю, то круг вырождается в точку.<br/>
      При вращении плоскости относительно центра круг переходит сам в себя.<br/>
      Круг является выпуклой фигурой.
    </div>
  );
}

function FooterItems() {
  return (
    <div className="list-of-footer-items">
      <a className="list-of-footer-items__company-about text_hide-by-size" href="#">
        © 2001—2018, Яндекс
      </a>
      <a className="list-of-footer-items__company-about text_hide-by-size" href="#">
        Реклама
      </a>
      <a className="list-of-footer-items__company-about text_hide-by-size" href="#">
        Помощь и обратная связь
      </a>
    </div>
  );
}

export class MainPlaceholder extends Component {
  constructor() {
    super();

    this.state = {
      mails: [],
      plaseholder: false
    };
    this.commonId = 0;
  }

  componentDidMount() {
    this.newMail();
  }

  newMail = () => {
    this.addNewMailBuClick();
    setTimeout(this.newMail, 5 * 1000 * 60 + getRandomValue(10, 1000 * 5));
  };

  addNewMailBuClick = () => {
    let mail = {
      id: this.commonId,
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
      let mails = state.mails;
      mails.push(mail);
      this.commonId++;
      return {
        mails: mails,
        plaseholder: state.plaseholder
      };
    });
  };

  deleteMail = (mail) => {
    let mailId = mail.getAttribute("id");

    this.setState((state) => {
      let filtered = state.mails.map((item) => {
        if (item.id.toString() !== mailId) {
          return item;
        } else {
          let tmp = item;
          tmp['delete'] = true;
          return tmp;
        }
      });
      return {
        mails: filtered,
        plaseholder: state.plaseholder
      };
    });
    mail.addEventListener('transitionend', () => {
      this.setState((state) => {
        let filtered = state.mails.filter((item) => item.id.toString() !== mailId);
        return {
          mails: filtered,
          plaseholder: state.plaseholder
        };
      });
    });
  };

  showMailContent = (e) => {
    let target = e.target;
    if (target === undefined || target.getAttribute("data-delete") === null) {
      return;
    }
    let mail = findMail(target);
    if (mail === null) {
      return;
    }
    this.hidePlaceholders();
  };

  hidePlaceholders = () => {
    this.setState((state) => {
      let plaseholder = !state.plaseholder;
      return {
        mails: state.mails,
        plaseholder: plaseholder
      };
    });
  };

  render() {
    let mails = this.state.mails.filter((item, index) => index < 30);
    return (
      <main className="main">
        <MainMenu addNewLetter={this.addNewMailBuClick.bind(this)}/>
        <div className="mails-placeholder">
          <MailsAction deleteMail={this.deleteMail}/>
          {this.state.plaseholder ? <PreviewPlaceholder closeClick={this.hidePlaceholders}/> :
            <div id="mails-placeholder" className="list-of-mails" onClick={this.showMailContent}>
              {mails.map((mail, item) => {
                if (mail.delete === false) {
                  return <TemplateMail id={mail.id} image={mail.image} title={mail.title} text={mail.text}
                                       date={mail.date}/>
                }
                else {
                  return <TemplateMail id={mail.id} image={mail.image}
                                       title={mail.title}
                                       text={mail.text}
                                       date={mail.date} cls="delete-animation"/>
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
