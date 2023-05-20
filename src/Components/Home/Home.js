import React from 'react';
import './Home.css';
import {Data} from '../Data/Data';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Body from '../Body/Body';
// import Selection from '../Selection/Selection';
import Product from '../Products/Product';


function Home()
{
    return (
        <div className='body'>
            {/* Something */}
            {/* <div className='FadeAway'></div> */}
            <div className='products'>
                {/* Hello */}
                {Data.map(element=>{
                    return <Product curr={element} key={element.id} />
                })}
            </div>
        </div>
    );
}

export default Home;