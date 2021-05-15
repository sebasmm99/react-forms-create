import React from 'react';

import './type-access-row.style.css';

const TypeAccessRow = (props) => {
    return(
        <div className="type-access-row-container">
            <div>{props.typeAccess}</div>
            Name  {'   -   '}  Pet  {'   -   '}  Age  {'   -   '}  Price
        </div>
    )
}

export default TypeAccessRow;