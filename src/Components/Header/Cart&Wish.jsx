import {Link} from "react-router-dom";

import {useSelector} from "react-redux";
import {RiShoppingCartFill , RiHeartAddFill} from 'react-icons/ri'

export const CartWish = () =>
{


    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)

    const NumberFormat = new Intl.NumberFormat('en-IN').format(totalPrice)

    return (
        <div className='w-80 flex justify-evenly items-center'>

            <section className='flex w-36 relative w-32 h-14 justify-evenly items-center '>

                <Link to='/cart-shop'>
                    <RiHeartAddFill className='text-4xl text-white text-blue-700'/>
                </Link>

                <div className='w-px h-9 bg-blue-300'> </div>

                <div className='flex flex-col justify-center items-start ml-2'>
                    <span className='text-sm w-20 text-white text-blue-700'>0 items</span>
                    <span className='text-white text-sm text-blue-700'>Wishlist</span>
                </div>
            </section>


            <section className='flex relative w-36 h-14 justify-evenly items-center bg-blue-700'>

                <Link to='/cart-shop'>
                    <RiShoppingCartFill className='text-4xl w-12 text-white'/>
                </Link>

                <div className='bg-white w-px h-9'> </div>


                <div className='flex flex-col justify-center items-start ml-2'>
                    <span className='w-20 text-sm text-white'>{totalQuantity} items</span>
                    <span className='w-20 text-white text-sm'>$ {NumberFormat}</span>
                </div>

            </section>
        </div>
    )
}