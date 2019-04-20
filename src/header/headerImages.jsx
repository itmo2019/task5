import React from 'react';
import { b } from './header'

import './headerImages.css';

import logoYandex from '../images/yandex-icon.svg'
import logoMail from '../images/mail-icon.svg'

function HeaderImageYandex() {
    return  <div className={b('image_wrapper_yandex')}>
				<img src={logoYandex} className={b('yandex_image')} alt=""></img>
			</div>; 
}

function HeaderImageMail() {
    return  <div className={b('image_wrapper_mail')}>
				<img src={logoMail} className={b('mail_image')} alt=""></img>
			</div>;
}

export default HeaderImageYandex;
export { HeaderImageMail };