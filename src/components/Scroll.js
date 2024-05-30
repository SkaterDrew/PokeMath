import React from 'react';

const Scroll = (props) => {
    return (
        <div className='relative'>
            <div className='bg-white absolute top-0' style={{overflowY: 'scroll', border: '1px solid black', maxHeight: '200px'}}>
                {props.children} {/* whatever is between <Scroll> and </Scroll> will be placed here*/}
            </div>
        </div>
    )
}

export default Scroll;