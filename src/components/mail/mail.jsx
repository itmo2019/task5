import React from 'react';

import MailTitle from '../mail-title';
import MailArticle from '../mail-article';

import './mail.css';

function Mail(props /* {mailID, callbacks, sender, avatar, title, date, article, classList, checked} */) {
    return  <div className="Mail" key={props.mailID}>
                <input className="Mail__Checkbox" id={props.mailID} type="checkbox" />
                <MailTitle {...props} />
                <MailArticle mailID={props.mailID} body={props.article} />
            </div>
}

export default Mail
