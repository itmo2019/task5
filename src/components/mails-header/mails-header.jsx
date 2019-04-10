import React from 'react';

import MailsMenu from "../mails-menu";

import './mails-header.css';

function MailsHeader({selectCallback, callbacks}) {
    return  <div className="mails-header">
                <input type="checkbox" className="mails-header__checkbox" id="select-all" onChange={e => selectCallback(e.target.checked)} />
                <div className="mails-header__mails-menu-wrapper">
                    <MailsMenu callbacks={callbacks} />
                </div>  
            </div>
}

export default MailsHeader;
