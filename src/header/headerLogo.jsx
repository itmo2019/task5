import React from 'react';

import './headerLogo.css';

function HeaderLogo() {
    return  <div className="header__logo">
                <HeaderLogoLine/>
                <HeaderLogoLine/>
                <HeaderLogoLine/>
            </div>;  
}

function HeaderLogoLine() {
	return  <div className="header__logo__line">
			</div>
}

export default HeaderLogo;