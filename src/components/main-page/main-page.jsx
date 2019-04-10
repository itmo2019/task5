import React from 'react';

import Menu from '../menu';
import MailsMaintainance from '../mails-maintainance';

import './main-page.css';

function MainPage(props) {
  return    <div className="main-page">
                <div className="main-page__menu-wrapper">
                    <Menu />
                </div>
                <div className="main-page__mails-maintainance-wrapper">
                    <MailsMaintainance {...props} /> 
                </div>
            </div>
}

export default MainPage;
