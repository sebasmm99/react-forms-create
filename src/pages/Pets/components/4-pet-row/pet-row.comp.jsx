import React from 'react';

import './pet-row.style.css';

const PetRow = (props) => {
    return(
        <div className="pet-row-container">
            
            {props.pet.race}
            {'  -  '}
            {props.pet.age} 
            {'  -  '}
            {props.pet.gender}
            {'  -   $'}
            {props.pet.price}
        </div>
    )
}

export default PetRow;