import React from 'react';

import './lettersOptions.css';

function LettersOptions() {
    return  <div className="letters__options_footer_wrapper">
	    		<div className="letters__options">
	    			<SelectAllCheckbox/>
	    			<Option name="Переслать"/>
	    			<Option name="Удалить"/>
	    			<Option name="Это спам!"/>
	    			<Option name="Прочитано"/>
	    			<Option name="Получить еще одно письмо (не сбрасывает таймер)"/>
	            </div>
	        </div>;  
}

function SelectAllCheckbox() {
	return  <div className="letters__option">
				<input className="letters__check_all_checkbox" type="checkbox"></input>
			</div>;
}

function Option({name, callback}) {
	return  <button className="letters__option" onClick={callback}>{name}</button>;
}

export default LettersOptions;
