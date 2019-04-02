import React from 'react';

import './menu.css';

function MenuItem({title}) {
    return <li className="Menu__Item">{title}</li>
}

function Menu() {
    return  <ul className="Menu">
                <li className="Menu__WriteMail" id="write-mail">Написать</li>
                <MenuItem title="Входящие"      />
                <MenuItem title="Отправленные"  />
                <MenuItem title="Удаленные"     />
                <MenuItem title="Спам"          />
                <MenuItem title="Черновики"     />
                <MenuItem title="Создать папку" />
            </ul>
}

export default Menu;
