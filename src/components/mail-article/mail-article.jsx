import React from 'react';

import mail_cross from './mail_cross.png';

import './mail-article.css';

function MailsArticle({mailID, body}) {
    return  <article className="mail-article">
                <label className="mail-article__cross" htmlFor={mailID}>
                    <img src={mail_cross} alt="quiting cross" width="18px" height="18px" />
                </label>
                {body}
                <footer className="mail-article__clearfix"></footer> 
            </article>
}

export default MailsArticle;
