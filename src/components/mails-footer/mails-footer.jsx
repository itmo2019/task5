import React from 'react';

import './mails-footer.css';

function Element({title}) {
    return <div className="mails-footer__element">{title}</div>
}

function MailsFooter() {
    return  <footer className="mails-footer">
                <Element title="Помощь и обратная связь"/>
                <Element title="Реклама"/>
                <Element title="© 2001—2018, Яндекс"/>
            </footer>  
}

export default MailsFooter;
