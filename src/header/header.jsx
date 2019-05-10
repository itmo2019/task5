import React, { Component }  from 'react';

import './header.css';

export class Header extends Component  {

	render() {
	    return (
	      <div className = "header window__header">
					<input type="checkbox" 
					className="header__box-item" 
					id = "set-all-box" 
					checked={this.props.isAllSelected}
					onChange={this.props.onSelectAll}/>
					<input type="submit" name="forward" className = "header__item" value="Переслать" />
					<button id="delButton"
						onClick={this.props.onDelete}
					>Удалить</button>
					<input type="submit" name="spam" className = "header__item" value="Это спам!" />
					<input type="submit" name="read" className = "header__item" value="Прочитано" />
			</div>
	    );
	}
}

export default Header;