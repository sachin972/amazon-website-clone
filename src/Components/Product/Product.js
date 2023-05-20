import React from 'react';
import './Product.css';
import {useStateValue} from '../../StateProvider';


export default function Product(props){

    const [{basket}, dispatch] = useStateValue();

    // console.log(basket);

    const addToBasket = ()=>{
        dispatch({
            type: 'Add',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating
            }
        })
    }
    return (
        <div className="product">
            <div className='product_info'>
                <p>{props.title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product_rating">
                    {Array(props.rating).fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                    
                </div>

            </div>
            <img src={props.image} alt='some_image' />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}