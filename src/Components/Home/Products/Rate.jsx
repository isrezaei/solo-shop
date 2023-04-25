import React from 'react';
import {RatingStar} from "rating-star";
import {Link, useLocation} from "react-router-dom";

const Rate = ({id , rate}) => {

    const location = useLocation()

    return (
        <div className='
            w-full flex items-center
            xs:flex-col xs:justify-center
            '>
            <RatingStar id={id.toString()} rating={rate} size={10}/>

            <Link to={`quick/${id}`} state={{background: location}}
                  className='
                      font-medium text-gray-400
                      xs:text-xs
                    '>Quick View</Link>
        </div>
    );
};

export default Rate;