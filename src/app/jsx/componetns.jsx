import {Component} from "react";
import React from "react";
import circle from "../images/circle.png";


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
    this.node = React.createRef();
  }

  componentDidMount() {
    if (this.props.animate) {
      this.node.current.classList.add("mail_offset-40px");
    }
    console.log("hmmm" + " " + this.props.animate);
    console.log(this.node.current.offsetHeight);
    this.node.current.classList.add("create-animation");
  }

  render() {
    let buildName = (this.props.delete ? " mail delete-animation " : " mail ")
      + (this.props.read ? " mail_status_read " : " mail_status_not-read ");
    return (
      <div onClick={this.props.clickMailContent(this.props.id, this.props.text)}
           ref={this.node}
           className={buildName}
           onTransitionEnd={this.props.onTransitionEnd(this.props.id, this.props.delete, this.props.animate)}
           data-delete id={this.props.id}>
        <div className="mail__item mail__select">
          <label className="mails-checkbox">
            <input className="mails-checkbox__checkbox" type="checkbox" checked={this.props.select}
                   onChange={this.props.changeStateMail}/>
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

export function MailsToolbar(props) {
  let selectAll = props.selectAll;
  let allChecked = props.allChecked;
  let stubFunc = () => {
  };
  return (
    <div className="mails-action">
      <div className="mails-action__item">
        <label className="mails-checkbox">
          <input className="mails-checkbox__checkbox" checked={allChecked}
                 onChange={selectAll}
                 type="checkbox"/>
          <span className="mails-checkbox__alternative-drawing">
            </span>
        </label>
      </div>
      {[["Переслать", stubFunc], ["Удалить", props.deleteMail],
        ["Это спам!", stubFunc], ["Прочитано", props.readMail]]
        .map((x) => {
          return <ToolbarButton buttonName={x[0]} clickFunc={x[1]}/>
        })}
    </div>
  );
}

export const PreviewPlaceholder = (props) => {
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
