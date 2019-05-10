import React from 'react';

import './newButton.css';


function NewButton({addNewLetter}) {
    return (
      <button id="newButton" onClick={addNewLetter}>новое письмо</button>
    );
}

export default NewButton;