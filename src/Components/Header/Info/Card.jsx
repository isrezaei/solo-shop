import React from 'react';
import {Link} from "react-router-dom";
import {RiShoppingCartFill} from "react-icons/ri";
import {useSelector} from "react-redux";

const Card = () => {

    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)

    return (
        <section className=' flex relative justify-evenly items-center rounded-3xl space-x-2'>
            <Link to='/cart-shop'>
                <RiShoppingCartFill className='

                     xs:text-3xl xs:text-neutral-600
                     md:text-neutral-800
                     lg:text-2xl
                    '/>
            </Link>

            <div className='flex justify-center items-start space-x-2'>
                    <span className='

                    xs:text-[.8rem] xs:text-neutral-800
                    md:text-neutral-800
                    lg:text-[.8rem]
                    '>{totalQuantity}</span>

                <span className='

                    xs:text-[.8rem] xs:text-neutral-800
                    lg:text-[.8rem] md:text-neutral-800'>${totalPrice.toFixed(2)}</span>
            </div>

        </section>
    );
};

export default Card;