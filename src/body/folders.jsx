import React from 'react';
import { block } from 'bem-cn';

import './folders.css';

const b = block('folders')

function Folders() {
    return  <div className={b()}>
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
	return  <button className={b('button')}>{name}</button>
}

function NewLetter() {
	return  <button className={b('new_letter')}>Написать</button>
}

export default Folders;
