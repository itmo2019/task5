import React from 'react';
import { b } from './header'

import './headerLogo.css';

function HeaderLogo() {
    return  <div className={b('logo')}>
                <HeaderLogoLine/>
                <HeaderLogoLine/>
                <HeaderLogoLine/>
            </div>;  
}

function HeaderLogoLine() {
	return  <div className={b('logo', 'line')}>
			</div>
}

export default HeaderLogo;