import React from 'react';
import TypeAccessRow from '../3-type-access-row/type-access-row.comp';
import AccessRow from '../4-access-row/access-row.comp';

import './products-table.style.css';

const ProductsTable = (props) => {
    return(
        <div className="products-table-container">
            {props.accessesList.map((category2, index)=>{
                return (
                    <React.Fragment key={category2.id}>
                        <TypeAccessRow typeAccess={category2.name}/>
                        <div>
                            {category2.accesses.map((access, indexAccess)=>{
                                return (
                                    <AccessRow
                                        key={access.id}
                                        access={access}
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

export default ProductsTable;


