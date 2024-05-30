import React from "react";

const Menu = ({choice}) => {
    return (
        <div className='dn f4 flex-ns items-center tc white-90'>
            <div onClick={choice('add')} className='dib link ph3'>
                Addition
            </div>
            <div onClick={choice('sub')} className='dib link ph3'>
                Soustraction
            </div>
            <div onClick={choice('mult')} className='dib link ph3'>
                Multiplication
            </div>
        </div>
    )
}

export default Menu