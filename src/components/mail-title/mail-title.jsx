import React from 'react';

import './mail-title.css';

function MailsTitle({callbacks, mailID, classList, isRead, avatar, sender, title, date, checked}) {
    var resAvatar = <div></div>
    if (avatar) {
        resAvatar = <img src={avatar} alt="avatar" width="30px" height="30px" />;
    }
    var checkboxID = mailID + "_checkbox"
    return  <div className={Array.from(classList).join(" ")}>
                <label className="mail-title__checkbox-wrapper" htmlFor={checkboxID}>
                    <input type="checkbox" id={checkboxID} className="mail-title__checkbox" 
                        checked={checked} 
                        onChange={() => callbacks.selected(!checked)}/>
                </label>
                <div className="mail-title__img-wrapper">{resAvatar}</div>
                <div className="mail-title__sender">{sender}</div>
                <div className="mail-title__unread-flag"></div>
                <label className="mail-title__title" htmlFor={mailID}>{title}</label>
                <time className="mail-title__date">{date}</time>
            </div>
}

export default MailsTitle;
