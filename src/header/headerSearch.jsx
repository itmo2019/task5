import React from 'react';
import { b } from './header'

import './headerSearch.css';

function HeaderSearch() {
    return  <div className={b('search_wrap')}>
				<Search/>
				<SearchClear/>
			</div>;
}

function Search() {
	return  <input className={b('search')} placeholder="Поиск"></input>
}

function SearchClear() {
	return  <button className={b('search_clear')}>X</button>
}

export default HeaderSearch;