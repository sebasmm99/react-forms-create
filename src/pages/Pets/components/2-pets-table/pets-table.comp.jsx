import React from 'react';
import TypePetRow from '../3-type-pet-row/type-pet-row.comp';
import PetRow from '../4-pet-row/pet-row.comp';

import './pets-table.style.css';

const PetsTable = (props) => {
    return(
        <div className="pets-table-container">
            {props.petsList.map((category, index)=>{
                return (
                    <React.Fragment key={category.id}>
                        <TypePetRow typePet={category.name}/>
                        <div>
                            {category.pets.map((pet, indexPet)=>{
                                return (
                                    <PetRow
                                        key={pet.id}
                                        pet={pet}
                                    />
                                );
                            })}
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default PetsTable;


