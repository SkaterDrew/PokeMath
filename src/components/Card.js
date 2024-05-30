import React from "react";

const Card = ({name, id, img}) => {

    function capitalize(str) { //makes the first letter of pokemon name capitalized
        return str.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter ).join('')
    }

    return (
        <div className="w-100 ph2 pt1">
            <div className="bg-dark-blue-o-60 flex flex-wrap justify-center items-center ph1 pv2 f3 ba bw2 br4 shadow-3">
                <div className='w-100 tc f3 f2-l b white'>
                    <span className='underline'>
                        {capitalize(name)}
                    </span>
                    : Id# {/* eventually, could add different stats instead of ID# */}
                    <span className='ba br-pill ph2 black bg-new-yellow'>
                        {id}
                    </span>
                </div>
                <div className='w-30 w-50-l'>
                    <img alt='sprite' src={img} className='pt1 mw-100'/>
                </div>
            </div>
        </div>
    )
}

export default Card