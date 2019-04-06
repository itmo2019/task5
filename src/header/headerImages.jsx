import React from 'react';

import './headerImages.css';

import logoYandex from '../images/yandex-icon.svg'
import logoMail from '../images/mail-icon.svg'

function HeaderImageYandex() {
    return  <div className="header__image_wrapper_yandex">
				<img src={logoYandex} className="header__yandex_image"></img>
			</div>; 
}

function HeaderImageMail() {
    return  <div className="header__image_wrapper_mail">
				<img src={logoMail} className="header__mail_image"></img>
			</div>;
}

export default HeaderImageYandex;
export { HeaderImageMail };