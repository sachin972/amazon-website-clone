import React from 'react';
import './Home.css';
import Product from '../Product/Product';
import Header from '../Header/Header';

export default function Home(){
    return (
        <div>
        {/* <> */}
        <Header />
            <div className="home">
                <div className="home_container">
                    <img 
                        className="home_image"
                        src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" 
                        alt="any_image" 
                    />
                    
                    <div className="home_row">
                        <Product
                            id='1'
                            title='Something'
                            rating={5}
                            price={29.99}
                            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
                        />
                        <Product 
                            id='2'
                            title="Kenwood kMix Stand Mixer for Baking, Sylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                            price={239.0}
                            rating={4}
                            image='https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg'
                            
                        />
                    </div>
                    <div className='home_row'>
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className='home_row'>
                        <Product />
                    </div>
                </div>
                
            </div>
        </div>
    );
}