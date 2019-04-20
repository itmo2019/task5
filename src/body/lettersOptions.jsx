import React from 'react';
import { b } from './letters';

import './lettersOptions.css';

function LettersOptions(props) {
    return  <div className={b('options_footer_wrapper')}>
	    		<div className={b('options')}>
	    			<SelectAllCheckbox
	    				clickSelectAll={props.clickSelectAll}
	    				isChecked={props.isChecked}
	    			/>
	    			<Option name="Переслать"/>
	    			<Option name="Удалить" callback={props.deleteLetters}/>
	    			<Option name="Это спам!"/>
	    			<Option name="Прочитано" callback={props.markAsRead}/>
	    			<Option name="Получить еще одно письмо (не сбрасывает таймер)" callback={props.newMail}/>
	            </div>
	        </div>;  
}

function SelectAllCheckbox(props) {
	return  <div className={b('option')}>
				<input 
					className={b('check_all_checkbox')}
					type="checkbox"
					checked={props.isChecked}
					onChange={props.clickSelectAll}
				></input>
			</div>;
}

function Option({name, callback}) {
	return  <button className={b('option')} onClick={callback}>{name}</button>;
}

export default LettersOptions;
