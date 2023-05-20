import React from 'react';
import Data from '../Data/Data.js';
import Product from '../Products/Product.js';

function Body(){

    return (
        <div className='body'>
            {Data.map((element=>{
                <Product curr={element} />
            }))}
        </div>
    );

}

export default Body;