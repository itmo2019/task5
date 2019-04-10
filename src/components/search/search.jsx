import React from 'react';

import cross from './cross.png'

import './search.css';

function Search({searchField, searchCallback}) {
    return  <div className="Search">
                <input type="text" className="Search__Field"
                    placeholder="Поиск"
                    value={searchField} 
                    onChange={event => searchCallback(event.target.value)} />
                <img className="Search__ClearButton"
                    alt="delete all"
                    src={cross} 
                    onClick={() => searchCallback("")} />
            </div>   
}

export default Search
