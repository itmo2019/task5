import {Component} from "react";
import React from "react";
import {MenuButton} from "./menu-button";
import '../../styles/navigation.css';
import '../../styles/components.css';

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
