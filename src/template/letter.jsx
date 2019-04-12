import React, { Component } from 'react';

export default class LetterTemplate extends Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}

	componentDidMount() {
		if (this.props.isAppearing) {
			var forceReflow = this.ref.current.offsetHeight
			this.props.setLetterAppeared(this.props.messageNum)
		}
	}

	render() {
		var id = this.props.messageNum
		if (this.props.toBeRemoved) {
			this.ref.current.addEventListener('transitionend', (event) => {
				this.props.removeLetter(this.props.messageID)
			})
		}
	    return  <div className={`letters__single_letter 
	    						${this.props.isUnread ? 'letters__unread_letter ' : ''}
	    						${this.props.isAppearing || this.props.toBeRemoved ? 'zeroOpacity ' : ''}
	    						`}
	    			 ref={this.ref}>
	                <div className="letters__letter_element">
	                	<input 
	                		className="letters__checkbox" 
	                		type="checkbox"
	                		checked={this.props.isChecked} 
	                		onChange={() => this.props.uncheckSelectAllCheckbox(id)}></input>
	                </div>
	                <div className="letters__letter_element">
	                	<img className="ya_logo" src="https://yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg" alt=""></img>
	                </div>
	                <div className="letters__letter_element letters__letter_header">
	                	<a href="#">{this.props.sender}</a>
	                </div>
	                <div className="letters__letter_element">
	                	<div className="bullet_unread">
	                	</div>
	                </div>
	                <div className="letters__letter_element letters__letter_header letters__letter_text">
	                	<a href="#">
	                		<label htmlFor="show_letter" className="letter_label" onClick={() => this.props.readLetter(id)}>{this.props.theme}</label>
	                	</a>
	                </div>
	                <div className="letters__letter_element letters__letter_date">
	                	{this.props.date}
	                </div>
	            </div>
    }
}