import React from 'react';
import {useSelector} from "react-redux";
import {selectCartShopById} from "../../../Redux/reducer/CartShopSlice";

const Name = ({ids}) => {

    const {product} = useSelector(state => selectCartShopById(state, ids))

    return (
        <p className='xs:text-xs  text-gray-500'>{product}</p>
    );
};

export default Name;