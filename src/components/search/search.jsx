import React from 'react';

import cross from './cross.png'

import './search.css';

function Search({searchField, searchCallback}) {
    return  <div className="search">
                <input type="text" className="search__field"
                    placeholder="Поиск"
                    value={searchField} 
                    onChange={event => searchCallback(event.target.value)} />
                <img className="search__clear-button"
                    alt="delete all"
                    src={cross} 
                    onClick={() => searchCallback("")} />
            </div>   
}

export default Search
