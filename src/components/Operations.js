import React from "react";
import plus from '../img/plus.png';
import minus from '../img/minus.png';
import multiplication from '../img/multiplication.png';
import equal from '../img/equal.png';

const Operations = ({operation, size}) => {

    const imgLink = () => { // choose the image of the right operation bases on the operation state, or equal sign otherwise
        if (operation === '+') {
            return plus;
        } else if (operation === '-') {
            return minus;
        } else if (operation === 'x') {
            return multiplication;
        } else {
            return equal;
        }
    }

    return (
        <div className={`${size} flex items-center justify-center pv3`}> {/* size changes for equal sign and operations */}
            <img alt='operations' src={imgLink()} className='w-10 w-30-l'/>
        </div>
    )
}

export default Operations