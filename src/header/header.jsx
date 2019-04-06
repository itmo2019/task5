import React from 'react';
import HeaderLogo from './headerLogo'
import HeaderImageYandex, { HeaderImageMail } from './headerImages'
import HeaderSearch from './headerSearch'

import './header.css';

function HeaderWrapper() {
    return  <div className="header_wrapper">
                <Header/>
            </div>;  
}

function Header() {
	return <div className="header">
		       <HeaderLogo/>
		       <HeaderImageYandex/>
		       <HeaderImageMail/>
		       <HeaderSearch/>
		   </div>;
}

export default HeaderWrapper;