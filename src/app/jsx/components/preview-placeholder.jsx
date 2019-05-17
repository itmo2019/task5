import React from "react";
import circle from "../../images/circle.png";
import '../../styles/mails-placeholder.css';

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
};
