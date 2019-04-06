import React from 'react';

import './search.css';

export default function Search(props) {
  return (
    <div className={`Search ${props.className}`}>
      <input className="Search__Input" type="text" placeholder="Поиск" />
      <div className="Search__ClearBackground">
        <div className="Search__ClearText">×</div>
      </div>
    </div>
  );
}
