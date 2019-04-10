import React from 'react'

import './article1.css'

function Article1({body}) {
    return  <div className="article1">
                {body}
                <footer className="article1__footer">
                    <a 
                        href="http://numbersapi.com" 
                        target="_blank"
                        rel="noopener noreferrer">
                            NUMBERSAPI
                    </a>
                </footer>
            </div>
}

export default Article1
