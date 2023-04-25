import React from 'react';
import {Link} from "react-router-dom";
import {RiHeartAddFill} from "react-icons/ri";

const Wishlist = () => {
    return (
        <section className='flex relative justify-evenly items-center space-x-2'>
            <Link to='/cart-shop'>
                <RiHeartAddFill className='

                     xs:text-3xl xs:text-neutral-50
                     lg:text-3xl lg:text-neutral-800
                    '/>
            </Link>
            <div className='flex flex-col justify-center items-start '>
                    <span className='
                    xs:text-[.8rem] xs:text-neutral-200
                    lg:lg:text-[.8rem]  lg:text-neutral-800
                    '>0</span>

            </div>

        </section>
    );
};

export default Wishlist;