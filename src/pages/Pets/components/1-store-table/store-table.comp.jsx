import React, { useState } from 'react';
import PetsTable from '../2-pets-table/pets-table.comp';

import './store-table.style.css';

const StoreTable = (props) => {

    const [category, setCategory] = useState('c1');
    const [pet, setPet] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [price, setPrice] = useState('');

    const addPet = (event)=>{
        event.preventDefault();
        const newPet = {
            id: pet,
            race: pet,
            age: age,
            gender: gender,
            price: parseFloat(price),
        }
        props.onAddPet(newPet, category);
    }

    return(
        <div className="store-table-container">
            <div className="tittle">
                PETS
            </div>
            <div>
                <PetsTable 
                    petsList={props.petsList}
                    onAddPet={props.onAddPet}
                />
            </div>
            <div className="forms">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Type of Pet
                                </td>
                                <td>
                                    <select
                                        value={category}
                                        onChange={(event)=>{
                                            setCategory(event.target.value);
                                        }}
                                    >
                                        <option value="c1">Dogs</option>
                                        <option value="c2">Cats</option>
                                    </select> 
                                </td>
                            </tr>
                            <tr>
                                <td>Race</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={pet}
                                        onChange={(event)=>{
                                            setPet(event.target.value);
                                        }}
                                    />       
                                </td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={age}
                                        onChange={(event)=>{
                                            setAge(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={gender}
                                        onChange={(event)=>{
                                            setGender(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={price}
                                        onChange={(event)=>{
                                            setPrice(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        onClick={addPet}
                                    >                                        
                                        Add Pet
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default StoreTable;