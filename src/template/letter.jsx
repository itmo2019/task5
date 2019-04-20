import React, { Component } from 'react';
import { b } from '../body/letters'

export default class Letter extends Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}

	componentDidMount() {
		this.props.setLetterRef(this.ref, this.props.messageID)
		if (this.props.isAppearing) {
			var forceReflow = this.ref.current.offsetHeight
			this.props.setMessageAppeared(this.props.messageNum)
		}
	}

	render() {
		var id = this.props.messageNum
	    return  <div className={`${b('single_letter')} 
	    						${this.props.isUnread ? b('unread_letter') : ''}
	    						${this.props.isAppearing || this.props.toBeRemoved ? 'zeroOpacity' : ''}
	    						`}
	    			 ref={this.ref}>
	                <div className={b('letter_element')}>
	                	<input 
	                		className={b('checkbox')} 
	                		type="checkbox"
	                		checked={this.props.isChecked} 
	                		onChange={() => this.props.uncheckSelectAllCheckbox(id)}></input>
	                </div>
	                <div className={b('letter_element')}>
	                	<img className="ya_logo" src="https://yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg" alt=""></img>
	                </div>
	                <div className={`${b('letter_header')} ${b('letter_element')}`}>
	                	<a href="#">{this.props.sender}</a>
	                </div>
	                <div className={b('letter_element')}>
	                	<div className="bullet_unread">
	                	</div>
	                </div>
	                <div className={`${b('letter_header')} ${b('letter_element')} ${b('letter_text')}`}>
	                	<a href="#">
	                		<label htmlFor="show_letter" className="letter_label" onClick={() => this.props.readLetter(id)}>{this.props.theme}</label>
	                	</a>
	                </div>
	                <div className={`${b('letter_element')} ${b('letter_date')}`}>
	                	{this.props.date}
	                </div>
	            </div>
    }
}