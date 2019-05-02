import {Component} from "react";
import React from "react";
import {findMail, selectAll} from "../scripts/init-global-vars";

export class MenuButton extends Component {
  render() {
    return (
      <button className="menu__action-button text_hide-by-size">{this.props.buttonName}</button>
    );
  }
}

export class ToolbarButton extends Component {
  render() {
    return (
      <button className="mails-action__button mails-action__item text_hide-by-size" onClick={this.props.clickFunc}>
        {this.props.buttonName}
      </button>
    );
  }
}

export class Mail extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div onClick={this.props.mailContent(this.props.id, this.props.text)}
           className={this.props.cls ? "mail mail_status_not-read delete-animation " + this.props.cls : "mail mail_status_not-read"}
           data-delete id={this.props.id}>
        <div className="mail__item mail__select">
          <label className="mails-checkbox">
            <input className="mails-checkbox__checkbox" type="checkbox" data-checkbox-select/>
            <span className="mails-checkbox__alternative-drawing">
          </span>
          </label>
        </div>
        <img className="mail__item mail__logo" src={this.props.image}/>
        <div className="mail__item mail__title text_hide-by-size" data-delete>{this.props.title}</div>
        <div className="mail__item mail__text-message text_hide-by-size" data-delete>{this.props.text}</div>
        <div className="mail__item mail__receive-time text_hide-by-size" data-delete>{this.props.date}</div>
      </div>

    );
  }
}

export class MainMenu extends Component {
  render() {
    return (
      <div className="menu">
        <button className="menu__write-letter-button text_hide-by-size">Написать</button>
        <nav className="menu__navigate-by-action">
          {["Входящие", "Отправленные", "Удалённые", "Спам", "Черновики", "Создать папку"].map((x) => {
            return <MenuButton
              buttonName={x}/>
          })}
          <button className="menu__action-button text_hide-by-size text_uppercase"
                  onClick={this.props.addNewLetter}>добавить новое письмо
          </button>
        </nav>
      </div>
    );
  }
}

export class MailsToolbar extends Component {
  constructor(...args) {
    super(...args);
    this.deleteSelected = this.deleteSelected.bind(this);
    this.selectAll = selectAll.bind(this);
    this.stubFunc = () => {
    };
  }

  deleteSelected = () => {
    let tmp = document.querySelectorAll("[data-checkbox-select]");
    let checkBox = Array.from(tmp).filter(item => item.checked);
    checkBox.map(item => findMail(item)).filter(item => item !== null).forEach(item => this.props.deleteMail(item));
  };

  render() {
    return (
      <div className="mails-action">
        <div className="mails-action__item">
          <label className="mails-checkbox">
            <input className="mails-checkbox__checkbox" onChange={this.selectAll} type="checkbox"/>
            <span className="mails-checkbox__alternative-drawing">
            </span>
          </label>
        </div>
        {[["Переслать", this.stubFunc], ["Удалить", this.deleteSelected],
          ["Это спам!", this.stubFunc], ["Прочитано", this.stubFunc]]
          .map((x) => {
            return <ToolbarButton buttonName={x[0]} clickFunc={x[1]}/>
          })}
      </div>
    );
  }

}
