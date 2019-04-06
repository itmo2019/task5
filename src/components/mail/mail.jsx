import React from 'react';

import MailTitle from '../mail-title';
import MailArticle from '../mail-article';

import './mail.css';

function Mail({mailID, callbacks, sender, avatar, title, date, article, classList}) {
    return  <div className="Mail" key={mailID}>
                <input className="Mail__Checkbox" id={mailID} type="checkbox" />
                <MailTitle callbacks={callbacks} mailID={mailID} sender={sender} avatar={avatar} title={title} date={date} classList={classList} />
                <MailArticle mailID={mailID} body={article} />
            </div>
}

export default Mail
