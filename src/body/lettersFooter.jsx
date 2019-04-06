import React from 'react';

import './lettersFooter.css';

function LettersFooter() {
    return  <div className="letters__options_footer_wrapper">
	    		<div className="letters__footer">
	    			<Option name="Помощь и обратная связь"/>
	    			<Option name="Реклама"/>
	    			<Option name="© 2001-2019, Яндекс"/>
	            </div>
	        </div>;  
}

function Option({name}) {
	return  <a href="#" class="letters__footer_option">{name}</a>
}


export default LettersFooter;
