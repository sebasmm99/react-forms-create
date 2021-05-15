import React from 'react';

import './access-row.style.css';

const AccessRow = (props) => {
    return(
        <div className="access-row-container">
            
            {props.access.name}
            {'  -  '}
            {props.access.pet} 
            {'  -  '}
            {props.access.age}
            {'  -   $'}
            {props.access.price}
        </div>
    )
}

export default AccessRow;