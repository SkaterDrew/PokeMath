import React, { useState } from 'react';
import Burger from './Burger.js';
import Menu from './Menu.js';
import HiddenMenu from './HiddenMenu.js';
import pokeball from '../img/pokeball.png';

const Nav = ({chooseOp}) => {

    const [hide, setHide] = useState(true); // sets state of hidden menu

    function open(event) { // opens (doesn't hide) the menu
        setHide(false);
    }

    function close(event) { // closes (hides) the menu
        setHide(true);
    }

    return (
        <nav className='flex items-center w-100 bg-dark-blue-o-80 white-90 mb1 pv2 ph1'>
            <div className='w-20 w-10-ns v-mid ph2'>
                <img className='f6 mw-100' alt='pokeball' src={pokeball}/>
            </div>
            <div className='w-60 w-40-ns v-mid tc f2 pb3 pokefont-h fw9 tracked'>
                PokeMath
            </div>
            <div className='w-20 w-50-ns v-mid flex items-center justify-center'>
                <Burger click={open}/> {/* on click, we open the hidden menu */}
                <Menu choice={chooseOp}/> {/* allows choosing the operation */}
            </div>
            <HiddenMenu hiding={hide} closing={close} choice={chooseOp}/> {/* on clicks, hidden menu closes */}
        </nav>
    )
}

export default Nav;