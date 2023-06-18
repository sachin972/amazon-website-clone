import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../Firebase';

export default function Header(){

    const [{basket, user}, dispatch] = useStateValue();

    const handleClick = () => {
        if(user){
            auth.signOut();
        }
        else{
            
        }
    }

    return <div className="header">
            <Link to='/'>
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='some_image' />
            </Link>
            <div className="header_search">
                <input className = "header_search_input" type="text" />
                <SearchIcon className="header_search_icon" />
            </div>
            <div className="header_nav">
                <Link to={! user && '/login'}>
                    <div onClick={handleClick} className="header_option">
                        <span className="header_option_one"> Hello {user ? user.email : 'Guest'} </span>
                        <span className="header_option_two"> {user ? 'Sign out' : 'Sign In'} </span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_option_one"> Returns </span>
                    <span className="header_option_two"> & Orders </span>
                </div>
                <div className="header_option">
                    <span className="header_option_one"> Your </span>
                    <span className="header_option_two"> Prime </span>
                </div>

                <Link to='/checkout'>

                    <div className="header_option_basket">
                        <ShoppingBasketIcon />
                        <span className="header_option_two header_basket_count">{basket.length}</span>
                    </div>
                </Link>

            </div>
    </div>;
}