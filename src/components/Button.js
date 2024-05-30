import React from "react";

const Button = ({onClick, text}) => {
    return (
        <div className='pt2'>
            <button onClick={onClick} className='f4 b white-80 ph3 pv1 bg-dark-blue-o-80 ba br-pill b--black shadow-2 grow'>
                {text}
            </button>
        </div>
    )
}

export default Button