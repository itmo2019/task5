import React from 'react';

import MailTitle from '../mail-title';
import MailArticle from '../mail-article';

import './mail.css';

function Mail({mailID, callbacks, isRead, sender, avatar, title, date, article, modifiers}) {
    return  <div className="Mail" key={mailID}>
                <input className="Mail__Checkbox" id={mailID} type="checkbox" />
                <MailTitle callbacks={callbacks} mailID={mailID} sender={sender} avatar={avatar} title={title} date={date} isRead={isRead} modifiers={modifiers} />
                <MailArticle mailID={mailID} body={article} />
            </div>
}

export default Mail
