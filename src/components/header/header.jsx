import React from 'react';

import Logo from '../logo';
import Search from '../search';

import './header.css';

function Header(props) {
    return  <header className="header">
                <div className="header__logo-wrapper">
                    <Logo />
                </div>
                <div className="header__search-wrapper">
                    <div className="header__search-wrapper1">
                        <Search {...props} />
                    </div>
                </div>
            </header>;  
}

export default Header;
