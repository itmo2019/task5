import React from 'react'

import './article1.css'

function Article1({body}) {
    return  <div className="Article1">
                {body}
                <footer className="Article1__Footer">
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
