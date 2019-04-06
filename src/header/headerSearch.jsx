import React from 'react';

import './headerSearch.css';

function HeaderSearch() {
    return  <div className="header__search_wrap">
				<Search/>
				<SearchClear/>
			</div>;
}

function Search() {
	return  <input className="header__search" placeholder="Поиск"></input>
}

function SearchClear() {
	return  <button className="header__search_clear">X</button>
}

export default HeaderSearch;