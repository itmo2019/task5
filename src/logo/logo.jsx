import React from 'react';

import './logo.css';
import logo_img from '../source/logo.jpg'


function Logo() {
    return (
        <div className="yandex body__yandex">
            <img src={logo_img}
            alt="Лого яндекса"
            height="31"
            width="153"
            className="yandex__logo" />
        </div>
    );
}

export default Logo;