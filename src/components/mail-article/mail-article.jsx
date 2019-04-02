import React from 'react';

import mail_cross from '../../resources/mail_cross.png';

import './mail-article.css';

function MailsArticle({mailID, body}) {
    return  <article className="MailArticle">
                <label className="MailArticle__Cross" htmlFor={mailID}>
                    <img src={mail_cross} alt="quiting cross" width="18px" height="18px" />
                </label>
                {body}
                <footer className="MailArticle__Clearfix"></footer> 
            </article>
}

export default MailsArticle;
