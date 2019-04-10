import React from 'react';

import MailTitle from '../mail-title';
import MailArticle from '../mail-article';

import './mail.css';

function Mail(props /* {mailID, callbacks, sender, avatar, title, date, article, classList, checked} */) {
    return  <div className="mail" key={props.mailID}>
                <input className="mail__checkbox" id={props.mailID} type="checkbox" />
                <MailTitle {...props} />
                <MailArticle mailID={props.mailID} body={props.article} />
            </div>
}

export default Mail
