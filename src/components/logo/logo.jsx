import React from 'react';

import logo_pic from './logo.png';

import './logo.css';

function Logo() {
    return  <div className="logo">
                <div className="logo__burger">
                    <div className="logo__burger-1"></div>
                </div>
                <img className="logo__title" alt="логотип" src={logo_pic} width="153" height="31" />
            </div>  
}

export default Logo;
