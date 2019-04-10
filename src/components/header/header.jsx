import React from 'react';

import Logo from '../logo';
import Search from '../search';

import './header.css';

function Header(props) {
    return  <header className="Header">
                <div className="Header__LogoWrapper">
                    <Logo />
                </div>
                <div className="Header__SearchWrapper">
                    <div className="Header__SearchWrapper1">
                        <Search {...props} />
                    </div>
                </div>
            </header>;  
}

export default Header;
