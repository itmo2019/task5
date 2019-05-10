import React from 'react';

import './find.css';


class Find extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { items: [], text: '' };
	    this.handleChange = this.handleChange.bind(this);
  	}
	render() {
		 return (
       		<input
	       		className="body__find" 
	       		name="request" 
	       		value={this.state.text}
	       		type="search"
	       		placeholder="Поиск"
	       		onChange={this.handleChange}
       		/>
   		 );
	}
	handleChange(e) {
    	this.setState({ text: e.target.value });
  	}
}

export default Find;