import React, { useState } from 'react';
import StoreTable from './components/1-store-table/store-table.comp';
import AccessoriesTable from './components2/1-accessories-table/accessories-table.comp';

import './pets-page.style.css';

const PetsPage = () => {

    let petsList = [
        {
            id:"c1",
            name:'Dogs',
            pets:[
                {
                    id:"c1g1",
                    race:"Rottweiler",
                    age:"Cub",
                    gender:"Male",
                    price:59.99,
                },
                {
                    id:"c1g2",
                    race:"Akita",
                    age:"Adult",
                    gender:"Female",
                    price:85.99,
                },
                {
                    id:"c1g3",
                    race:"Beagle",
                    age:"Adult",
                    gender:"Female",
                    price:100.99,
                }
            ],
        },
        {
            id:"c2",
            name:'Cats',
            pets:[
                {
                    id:"c2g1",
                    race:"Abyssinian Cat",
                    age:"Adult",
                    gender:"Male",
                    price:60.99,
                },
                {
                    id:"c2g2",
                    race:"Bombay Cat",
                    age:"Cub",
                    gender:"Female",
                    price:70.99,
                },
                {
                    id:"c2g3",
                    race:"Bengal Cat",
                    age:"Cub",
                    gender:"Male",
                    price:90.99,
                }
            ],
        }
    ];

    let accessesList = [
        {
            id:"c1",
            name:'Hygiene',
            accesses:[
                {
                    id:"c1g1",
                    name:"Soap",
                    pet:"Cat",
                    age:"Cub",
                    price:2.99,
                },
                {
                    id:"c1g2",
                    name:"Shampoo",
                    pet:"Dog",
                    age:"Adult",
                    price:4.99,
                },
            ],
        },
        {
            id:"c2",
            name:'Food',
            accesses:[
                {
                    id:"c2g1",
                    name:"Purine",
                    pet:"Dog",
                    age:"Adult",
                    price:1.99,
                },
                {
                    id:"c2g2",
                    name:"Snacks",
                    pet:"Cat",
                    age:"Cub",
                    price:2.99,
                },
            ],
        }
        
    ];

    const [pets, setPets] = useState(petsList);

    const [accesses, setAccesses] = useState(accessesList);
    

    return(
        <>
            <div className="pets-page-container">
                <StoreTable 
                    petsList={pets}
                    onAddPet={(newPetObjt, categoryId)=>{
                        const newPets = [];
                        for(let i=0; i<pets.length; i++){
                            if(pets[i].id !== categoryId){
                                newPets.push(pets[i]);
                            }
                            else {
                                newPets.push(
                                    {
                                        ...pets[i],
                                        pets:[...pets[i].pets, newPetObjt]
                                    }
                                );
                            }
                        }
                        
                        setPets(newPets);
                    }}
                />
                <AccessoriesTable 
                    accessesList={accesses}
                    onAddAccess={(newAccessObjt, category2Id)=>{
                        const newAccesses = [];
                        for(let i=0; i<accesses.length; i++){
                            if(accesses[i].id !== category2Id){
                                newAccesses.push(accesses[i]);
                            }
                            else {
                                newAccesses.push(
                                    {
                                        ...accesses[i],
                                        accesses:[...accesses[i].accesses, newAccessObjt]
                                    }
                                );
                            }
                        }
                        
                        setAccesses(newAccesses);
                    }}
                />
            </div>
        </> 
    )

}

export default PetsPage;