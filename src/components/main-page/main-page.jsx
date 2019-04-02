import React from 'react';

import Menu from '../menu';
import MailsMaintainance from '../mails-maintainance';

import './main-page.css';

function MainPage() {
  return    <div className="MainPage">
                <div className="MainPage__MenuWrapper">
                    <Menu />
                </div>
                <div className="MainPage__MailsMaintainanceWrapper">
                    <MailsMaintainance /> 
                </div>
            </div>
}

export default MainPage;