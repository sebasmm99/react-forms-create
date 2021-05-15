import React from 'react';

import './type-pet-row.style.css';

const TypePetRow = (props) => {
    return(
        <div className="type-pet-row-container">
            <div>{props.typePet}</div>
            Race  {'   -   '}  Age  {'   -   '}  Gender  {'   -   '}  Price
        </div>
    )
}

export default TypePetRow;