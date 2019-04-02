import React from 'react';

import logo_pic from '../../resources/logo.png';

import './logo.css';

function Logo() {
    return  <div className="Logo">
                <div className="Logo__Burger">
                    <div className="Logo__Burger-1"></div>
                </div>
                <img className="Logo__Title" alt="логотип" src={logo_pic} width="153" height="31" />
            </div>  
}

export default Logo;
