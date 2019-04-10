import React from 'react';

import Header from '../header';
import MainPage from '../main-page';

import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {searchField: ""}
    }
    
    render() {
        return  <div className="app">
                    <Header  
                        searchField={this.state.searchField} 
                        searchCallback={value => this.setState({searchField: value})} />
                    <MainPage searchField={this.state.searchField} />
                </div>
    }
}
