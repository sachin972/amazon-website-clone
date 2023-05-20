import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';
import Header from '../Header/Header';

export default function Checkout(){
    const [{basket} , dispatch] = useStateValue();
    return (
        <div>
            <Header />
            <div className="checkout">
                <div className="checkout_left">
                    <img className="checkout_ad" src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt="advertisement" />

                    <div>
                        <h2 className="checkout_title">
                            Your Shopping Basket
                        </h2>
                        {basket.map(item=>(
                            <CheckoutProduct 
                                id= {item.id}
                                price= {item.price}
                                image={item.image}
                                title={item.title}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="checkout_right">
                    <h2>Subtotal from cart</h2>
                    <Subtotal />
                </div>
            </div>
        </div>
    );
}