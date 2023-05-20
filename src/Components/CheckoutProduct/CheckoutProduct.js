import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider';

export default function CheckoutProduct(props){
    // console.log(props);

    const [{basket}, dispatch] = useStateValue();

    const remove = ()=>{
        dispatch({
            type: 'Remove',
            id: props.id
        })
    }

    return (
        <div className="checkout_product">
            <img className="checkout_product_image" src={props.image} />
            <div className="checkout_product_info">
                <p className="checkout_product_title">
                    {props.title}
                </p>
                <p className="checkout_product_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkout_product_rating">
                    {Array(props.rating)
                    .fill()
                    .map((_, i)=> (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={remove}>Remove from Cart</button> 
            </div>
        </div>
    );
}