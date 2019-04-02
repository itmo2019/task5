import React from 'react';

import './search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {fieldValue: "Поиск"}
        this.changeHandler = this.changeHandler.bind(this)
    }
    render() {
        return  <div className="Search">
                    <input type="text" className="Search__Field" 
                        value={this.state.fieldValue} 
                        onChange={this.changeHandler} />
                </div>   
    }
    changeHandler(event) {
        this.setState({fieldValue: event.target.value});
    }
}