import React from 'react';

import Logo from '../logo';
import Search from '../search';

import './header.css';

function Header() {
    return  <header className="Header">
                <Logo   />
                <Search />
            </header>;  
}

export default Header;
