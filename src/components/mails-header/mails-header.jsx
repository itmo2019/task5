import React from 'react';

import MailsMenu from "../mails-menu";

import './mails-header.css';

function MailsHeader({selectCallback, callbacks}) {
    return  <div className="MailsHeader">
                <input type="checkbox" className="MailsHeader__Checkbox" id="select-all" onChange={e => selectCallback(e.target.checked)} />
                <div className="MailsHeader__MailsMenuWrapper">
                    <MailsMenu callbacks={callbacks} />
                </div>  
            </div>
}

export default MailsHeader;
