import React from 'react';

import './folders.css';

function Folders() {
    return  <div className="folders">
    			<NewLetter/>
                <Folder name="Входящие"/>
                <Folder name="Отправленные"/>
                <Folder name="Удалённые"/>
                <Folder name="Спам"/>
                <Folder name="Черновики"/>
                <Folder name="Создать папку"/>
            </div>;  
}

function Folder({name}) {
	return  <button className="folders__button">{name}</button>
}

function NewLetter() {
	return  <button className="folders__new_letter">Написать</button>
}

export default Folders;
