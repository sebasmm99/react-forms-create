import React, { useState } from 'react';
import ProductsTable from '../2-products-table/products-table.comp';

import './accessories-table.style.css';

const AccessoriesTable = (props) => {

    const [category2, setCategory2] = useState('c1');
    const [name, setName] = useState('');
    const [pet, setPet] = useState('');
    const [age, setAge] = useState('');
    const [price, setPrice] = useState('');

    const addAccess = (event)=>{
        event.preventDefault();
        const newAccess = {
            id: name,
            name: name,
            pet: pet,
            age: age,
            price: parseFloat(price),
        }
        props.onAddAccess(newAccess, category2);
    }

    return(
        <div className="accessories-table-container">
            <div className="tittle2">
                ACCESSORIES
            </div>
            <div>
                <ProductsTable 
                    accessesList={props.accessesList}
                    onAddAccess={props.onAddAccess}
                />
            </div>
            <div className="forms2">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Accessory Class
                                </td>
                                <td>
                                    <select
                                        value={category2}
                                        onChange={(event)=>{
                                            setCategory2(event.target.value);
                                        }}
                                    >
                                        <option value="c1">Hygiene</option>
                                        <option value="c2">Food</option>
                                    </select> 
                                </td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={name}
                                        onChange={(event)=>{
                                            setName(event.target.value);
                                        }}
                                    />       
                                </td>
                            </tr>
                            <tr>
                                <td>Pet</td>
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
                                        onClick={addAccess}
                                    >                                        
                                        Add Accessory
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

export default AccessoriesTable;