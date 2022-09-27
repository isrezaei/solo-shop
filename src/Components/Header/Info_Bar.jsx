import {Link} from "react-router-dom";

import {useSelector} from "react-redux";
import {RiShoppingCartFill , RiHeartAddFill} from 'react-icons/ri'

export const Info_Bar = () =>
{
    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)

    return (
        <div className='
        flex items-center
        xs:w-full xs:justify-around
        md:w-80 md:justify-center
        '>

            <section className='flex w-36 relative h-14 justify-evenly items-center '>
                <Link to='/cart-shop'>
                    <RiHeartAddFill className='
                     w-12
                     xs:text-3xl xs:text-neutral-50
                     lg:text-3xl lg:text-white
                     2xl:text-3xl
                    '/>
                </Link>
                <div className='w-px xs:h-3 xs:bg-neutral-600 md:h-7 lg:h-6 md:bg-white'> </div>

                <div className='flex flex-col justify-center items-start ml-2'>
                    <span className='
                    w-20
                    xs:text-[.8rem] xs:text-neutral-200
                    lg:lg:text-[.8rem]  lg:text-white
                    2xl:text-sm
                    '>0 items</span>
                    <span className='
                    w-20
                    xs:text-[.8rem] xs:text-neutral-200
                    lg:lg:text-[.8rem]  lg:text-white
                    2xl:text-sm
                    '>Wishlist</span>
                </div>

            </section>


            {/*cart shop section*/}

            <section className='
            flex relative justify-evenly items-center rounded-3xl
            xs:py-[.2rem] xs:bg-neutral-50
            md:bg-blue-700
            lg:w-36 lg:h-12
            '>
                <Link to='/cart-shop'>
                    <RiShoppingCartFill className='
                     w-12
                     xs:text-3xl xs:text-neutral-600
                     md:text-white
                     lg:text-2xl
                     2xl:text-3xl
                    '/>
                </Link>

                <div className='w-px xs:h-3 md:h-7 lg:h-6 xs:bg-neutral-600 md:bg-white'> </div>

                <div className='flex flex-col justify-center items-start ml-2'>
                    <span className='
                    w-20
                    xs:text-[.8rem] xs:text-neutral-800
                    md:text-white
                    lg:text-[.8rem]
                    2xl:text-sm'>{totalQuantity} items</span>

                    <span className='
                    w-20
                    xs:text-[.8rem] xs:text-neutral-800
                    lg:text-[.8rem] md:text-white
                    2xl:text-sm'>${totalPrice.toFixed(2)}</span>
                </div>
            </section>

        </div>
    )
}