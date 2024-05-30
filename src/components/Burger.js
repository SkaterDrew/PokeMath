import React from "react";

const Burger = ({click}) => {
    return (
        <div onClick={click} className='flex flex-column items-center dn-ns'> {/* 'dn-ns' hides the burger when the screen is not small (not mobile phone) */}
            <div className='w2 bg-white-90 br-pill ma1' style={{height: '3px'}}></div>
            <div className='w2 bg-white-90 br-pill ma1' style={{height: '3px'}}></div>
            <div className='w2 bg-white-90 br-pill ma1' style={{height: '3px'}}></div>
        </div>
    )
}

export default Burger;