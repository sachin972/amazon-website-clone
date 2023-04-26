import React from 'react';
import { Icon } from '@iconify/react';
import './Header.css';
import { Input, InputAdornment } from '@material-ui/core';
import { Search, ShoppingCart } from '@material-ui/icons';

function Header(){
    const count = 0;
    return (
        <div className='header'>
            <nav>
                <Icon icon='uim:amazon' width='3em' color='white' />
                
                <Input className='input' endAdornment={
                    <InputAdornment position='end'>
                        <div className='coloring'><Search /></div>
                    </InputAdornment>
                } />
                {/* <div className='inputImage'><input className='input' type='text' />
                <><Search className='inner' /></>
                </div> */}
                <div className='navigation'>
                    <div className='items'>
                        <a Link=''>Sign In</a>
                    </div>
                    <div className='items'>
                        <a Link=''>Returns & <b>Orders</b></a>
                    </div>
                    <div className='items'>
                        <a Link=''>Your <b>Prime</b></a>
                    </div>
                    <div className='items'>
                        {/* <div className='inner'> */}
                            <ShoppingCart />
                        {/* </div> */}
                        {/* <div className='inner'> */}
                            <b>&nbsp;{count}</b>
                        {/* </div> */}
                    </div>
                    
                </div>

            </nav>
        </div>
    );
}

export default Header;