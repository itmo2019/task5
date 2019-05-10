import React, { Component } from 'react';

import './letter.css'
export class Letter extends Component {
	isHidden () {
		if (this.props.letter.hidden) {
			return " hidden"
		}
		return  ""
	}
	isUnread = () => {
		if (this.props.letter.isUnread) {
			return " unread-letter"
		}
		return  ""
	}
	
	isDeleted = () => {
		if (this.props.letter.deleted) {
			return " deleted"
		}
		return ""
	}
	 render() {
	    return (
	    	<div>
	    		
	    		<div id = {"letterid" + this.props.letter.id} className = {"firstletter letters__firstletter" + this.isHidden() + this.isDeleted()}>
					<label id = {"letters__letter" + this.props.letter.id} 
					htmlFor={"show-letter" + this.props.letter.id} 
					className={"letter firstletter__clickme" + this.isUnread()}

					>
						<label id = {"ch"  + this.props.letter.id} htmlFor={"checkbox"   + this.props.letter.id} className="letter_checkbox" >
							<input id = {"checkbox"   + this.props.letter.id}
							 type="checkbox" 
							 className="firstletter__box letter__box"
							 checked={this.props.isSelected}
							 onChange={() => this.props.onSelectChange(this.props.letter.id, !this.props.isSelected)} />
						</label>

						<div className="firstletter__logo-authtor">{this.props.letter.authtor[0]}</div>
						<div className="firstletter__authtor">{this.props.letter.authtor}</div>
						<div className="letter__unread" style = {{display : this.props.letter.isUnread ? 'block' : 'none' }}></div> 
						<div className="firstletter__textletter">{this.props.letter.textletter}</div>
						<date className="firstletter__date">{this.props.letter.date}</date>
					</label>
				</div>
	    	</div>
	    );
    }
	
}

export default Letter