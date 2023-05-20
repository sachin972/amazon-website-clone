import React from 'react';
import './Product.css';

function Product(props){

    const curr = props.curr;
    return (
        <div className='product'>
            <h2>{curr.title}</h2>
            <img src={curr.image} />
            <p>{curr.price}</p>
            {/* {console.log(curr)} */}
            <button>Add to Basket</button>
        </div>

    );
}

export default Product;