import React from "react";
import x from '../img/x.jpg';

const HiddenMenu = ({hiding, closing, choice}) => {

    function hidden(boolean) { // className 'dn' removes an element from the document flow, so we apply it when hide is true
        if (boolean) return 'dn';
        else return ''
    }

    return (
        <div className={`${hidden(hiding)} dn-ns bg-dark-blue absolute right-0 top-0`} style={{zIndex: '10'}}>
            <div className='f4 flex flex-column items-center tc white-90 pb4'>
                <div onClick={closing}>
                    <img alt='x' src={x} className='fr' style={{width: '15%'}}/>
                </div>
                <div onClick={() => {choice('add')(); closing();}} className='dib v-midlink pa3'>
                    Addition
                </div>
                <div onClick={() => {choice('sub')(); closing();}} className='dib link pa3'>
                    Soustraction
                </div>
                <div onClick={() => {choice('mult')(); closing();}} className='dib link pa3'>
                    Multiplication
                </div>
            </div>
        </div>
    )
}

export default HiddenMenu;