import React from 'react';
import {RatingStar} from "rating-star";
const Rate = ({id , rate}) => {
    return (
        <div className='
            w-full flex items-center
            xs:flex-col xs:justify-center
            '>
            <RatingStar id={id.toString()} rating={rate} size={10}/>

        </div>
    );
};

export default Rate;