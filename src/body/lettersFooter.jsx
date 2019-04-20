import React from 'react';
import { b } from './letters'

import './lettersFooter.css';

function LettersFooter() {
	return  <div className={b('options_footer_wrapper')}>
				<div className={b('footer')}>
					<Option name="Помощь и обратная связь"/>
					<Option name="Реклама"/>
					<Option name="© 2001-2019, Яндекс"/>
				</div>
			</div>;  
}

function Option({name}) {
	return  <a href="#" className={b('footer_option')}>{name}</a>
}


export default LettersFooter;
