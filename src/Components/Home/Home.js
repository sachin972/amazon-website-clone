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
                            id = '4'
                            title = "Smart Watch for Men Women(Answer/Make Call), Alexa Built-in,1.7'Fitness Watch with Heart Rate SpO2 Sleep Monitor 60 Sports IP68 Waterproof Activity Trackers and Smartwatches for iPhone Android Phones"
                            price = {59.99}
                            rating = {4}
                            image = 'https://m.media-amazon.com/images/I/71a7Z16vOqL._AC_UY218_.jpg'
                        />
                        
                        <Product 
                            id='2'
                            title="Panti Stand Mixer, 8.5 Qt. 660W 6+P Speed Kitchen Aid with Dough Hooks, Whisk, Beater and Suction Cup Bottom Splash Guard Attachments for Baking Bread, Cookie, Kneading, Dishwasher Safe, Silver"
                            price={239.0}
                            rating={4}
                            image='https://m.media-amazon.com/images/I/71ezyIKdXPL._AC_SX569_.jpg'
                            
                        />
                    </div>
                    <div className='home_row'>
                        <Product 
                            id = '3'
                            title='The Right Call: What sports teach us about work and Life'
                            price={18.19}
                            rating={4}
                            image='https://m.media-amazon.com/images/I/51Lcnf0gC3L._AC_SY200_.jpg'
                        />
                        <Product
                            id='1'
                            title='One True Loves: A Novel'
                            rating={5}
                            price={31.99}
                            image='https://m.media-amazon.com/images/I/41gvyEMDoML.jpg'
                        />
                        <Product 
                            id= '5'
                            title = 'Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone'
                            rating ={4}
                            price={8.99}
                            image ='https://m.media-amazon.com/images/I/61Zh467pKjL._AC_SX679_.jpg'
                        />
                    </div>
                    <div className='home_row'>
                        <Product
                            id='6'
                            title='Kingston NV2 250G M.2 2280 NVMe Internal SSD | PCIe 4.0 Gen 4x4 | Up to 3000 MB/s | SNV2S/250G'
                            rating={5}
                            price={20.99}
                            image='https://m.media-amazon.com/images/I/71NfMZKkpQL._AC_SX466_.jpg'
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}