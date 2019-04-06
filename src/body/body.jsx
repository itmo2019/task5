import React from 'react';

import './body.css';

import Folders from './folders'
import Letters from './letters'

function BodyWrapper() {
    return  <div className="body_wrapper">
                <Folders/>
                <Letters/>
            </div>;  
}

export default BodyWrapper;
