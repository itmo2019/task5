import React from "react";
import '../../styles/mails-placeholder.css';
import '../../styles/components.css';
import {ToolbarButton} from "./toolvar-button";

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
