import React from 'react';
import { block } from 'bem-cn';
import HeaderLogo from './headerLogo'
import HeaderImageYandex, { HeaderImageMail } from './headerImages'
import HeaderSearch from './headerSearch'

import './header.css';

const b = block('header')

function HeaderWrapper() {
    return  <div className="header_wrapper">
                <Header/>
            </div>;  
}

function Header() {
	return <div className={b()}>
		       <HeaderLogo/>
		       <HeaderImageYandex/>
		       <HeaderImageMail/>
		       <HeaderSearch/>
		   </div>;
}

export default HeaderWrapper;
export { b }; 