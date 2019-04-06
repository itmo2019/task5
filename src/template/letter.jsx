import React from 'react';

function LetterTemplate() {
    return  <div className="letters__single_letter">
                <div className="letters__letter_element">
                	<input className="letters__checkbox" type="checkbox"></input>
                </div>
                <div className="letters__letter_element">
                	<img class="ya_logo" src="https://yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg"></img>
                </div>
                <div className="letters__letter_element letters__letter_header">
                	<a href="#"></a>
                </div>
                <div className="letters__letter_element">
                	<div className="bullet_unread">
                	</div>
                </div>
                <div className="letters__letter_element letters__letter_header letters__letter_text">
                	<a href="#">
                		<label for="show_article" className="article_label"></label>
                	</a>
                </div>
                <div className="letters__letter_element letters__letter_date">
                </div>
            </div>
}

export default LetterTemplate;