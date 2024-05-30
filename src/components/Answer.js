import React from "react";
import Button from '../components/Button.js';

const Answer = ({answer, show, reveal}) => {

    // className 'dn' removes content, so we cahnge dn from one div to another depending on the show state
    return (
        <div className="flex items-center justify-center w-100 w-60-ns pv2">
            <div className={`${show ? '' : 'dn '}f2 f-headline-l b ba br-pill ph4 pv1 bg-new-yellow`}>
                {answer}
            </div>
            <div className={!show ? '' : 'dn'}>
                <Button onClick={reveal} text={'Voir la réponse'}/>
            </div>
        </div>
    )
}

export default Answer