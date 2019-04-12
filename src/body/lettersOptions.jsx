import React from 'react';

import './lettersOptions.css';

function LettersOptions(props) {
    return  <div className="letters__options_footer_wrapper">
	    		<div className="letters__options">
	    			<SelectAllCheckbox
	    				clickSelectAll={props.clickSelectAll}
	    				isChecked={props.isChecked}
	    			/>
	    			<Option name="Переслать"/>
	    			<Option name="Удалить" callback={props.deleteLetters}/>
	    			<Option name="Это спам!"/>
	    			<Option name="Прочитано"/>
	    			<Option name="Получить еще одно письмо (не сбрасывает таймер)" callback={props.newMail}/>
	            </div>
	        </div>;  
}

function SelectAllCheckbox(props) {
	return  <div className="letters__option">
				<input 
					className="letters__check_all_checkbox" 
					type="checkbox"
					checked={props.isChecked}
					onChange={props.clickSelectAll}
				></input>
			</div>;
}

function Option({name, callback}) {
	return  <button className="letters__option" onClick={callback}>{name}</button>;
}

export default LettersOptions;
