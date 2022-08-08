import {Link} from "react-router-dom";

import {useSelector} from "react-redux";
import {RiShoppingCartFill , RiHeartAddFill} from 'react-icons/ri'

export const CartWish = () =>
{
    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)

    return (
        <div className='
        flex items-center
        xs:w-full xs:justify-around
        lg:w-80 lg:justify-evenly
        '>
            <section className='flex w-36 relative h-14 justify-evenly items-center '>
                <Link to='/cart-shop'>
                    <RiHeartAddFill className='
                     w-12
                     xs:text-3xl xs:text-neutral-200
                     lg:text-4xl lg:text-white
                    '/>
                </Link>
                <div className='w-px h-9 xs:bg-neutral-600 lg:bg-white'> </div>
                <div className='flex flex-col justify-center items-start ml-2'>
                    <span className='
                    w-20
                    lg:text-sm lg:text-white
                    xs:text-[.8rem] xs:text-neutral-200
                    '>0 items</span>
                    <span className='
                    w-20
                    lg:text-sm lg:text-white
                    xs:text-[.8rem] xs:text-neutral-200
                    '>Wishlist</span>
                </div>

            </section>

            <section className='
            flex relative justify-evenly items-center
            xs:rounded-full xs:py-[.3rem] xs:bg-neutral-50
            lg:rounded-none lg:w-36 lg:h-14 lg:bg-blue-700
            '>
                <Link to='/cart-shop'>
                    <RiShoppingCartFill className='
                     w-12
                     xs:text-3xl xs:text-neutral-600
                     lg:text-4xl lg:text-white
                    '/>
                </Link>

                <div className='w-px h-9 xs:bg-neutral-600 lg:bg-white'> </div>

                <div className='flex flex-col justify-center items-start ml-2'>
                    <span className='
                    w-20
                    lg:text-sm lg:text-white
                    xs:text-[.8rem] xs:text-neutral-800
                    '>{totalQuantity} items</span>

                    <span className='
                    w-20
                    lg:text-sm lg:text-white
                    xs:text-[.8rem] xs:text-neutral-800
                    '>${totalPrice.toFixed(2)}</span>
                </div>
            </section>
        </div>
    )
}