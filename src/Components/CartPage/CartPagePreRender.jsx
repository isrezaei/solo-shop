import {useState} from "react";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../Redux/CartShopSlice";
import {CartPageEachCart} from "./CartPageEachCart";
import {HeaderUp} from "../Header/HeaderUp";
import {IoMdArrowRoundBack} from 'react-icons/io'

export const CartPagePreRender = () =>
{
    const CartProduct = useSelector(state => selectCartShopIds(state))

    const Render = CartProduct.map(ids => <CartPageEachCart key={ids} ids={ids}/>)

    const [headerPosition] = useState('relative');

    return (
        <>
            <HeaderUp headerPosition={headerPosition}/>

            <div className='w-full mt-8'>
                <div className='container h-150 max-w-8xl  mx-auto flex justify-center items-start'>
                    <div className='flex w-8/12 flex-col justify-start items-center'>
                        <div className='w-11/12 h-20 px-4 flex justify-between items-center border-b border-b-gray-200'>
                            <p className='text-2xl font-bold'>Shopping Cart</p>
                            <p className='text-2xl font-bold'>3 Items</p>
                        </div>
                        <div className='w-11/12 h-20 relative flex justify-between items-center'>
                            <p className='absolute left-6'>PRODUCT DETAILS</p>
                            <p className='absolute left-128.5'>QUANTITY</p>
                            <p className='absolute left-141'>PRICE</p>
                            <p className='absolute right-16'>TOTAL</p>
                        </div>
                        <div className='w-full h-140 overflow-y-scroll scrollbar-hide'>
                            {Render}
                        </div>
                    </div>


                    <div className='w-3/12 h-full p-6 bg-gray-100'>
                        <div className='w-full h-14 flex items-start text-3xl text-gray-600 font-bold border-b border-b-gray-300'>Order Summary</div>
                        <div className='w-full h-16 flex justify-between items-center'>
                            <p className=''>ITEMS 3</p>
                            <p className='text-xl text-gray-700'>$553.3</p>
                        </div>
                        <div className='w-full h-28 flex flex-col justify-center gap-y-1 items-start'>
                            <label htmlFor='shipping' className='text-gray-500 text-sm'>SHIPPING</label>
                            <select id='shipping' className='border-none w-full'>
                                <option>Standard delivery - $5.00</option>
                                <option>Fast delivery - $20.00</option>
                            </select>
                        </div>
                        <div  className='w-full h-28 flex flex-col justify-center gap-y-1 items-start'>
                            <label htmlFor='promo-code' className='text-gray-500 text-sm'>PROMO CODE</label>
                            <input id='promo-code' placeholder='inter your code' className='w-full h-11 p-3'/>
                        </div>
                        <div className='w-full h-24  flex items-center border-b border-b-gray-300'>
                            <button className='w-24 h-11 bg-blue-700 text-white'>APPLY</button>
                        </div>
                        <div className='w-full h-16 flex justify-between items-center'>
                            <p className='text-gray-500'>TOTAL COST</p>
                            <p className='text-2xl font-bold text-blue-700'>$552</p>
                        </div>
                        <div className='w-full h-56  flex flex-col justify-center gap-3 items-center'>
                            <button className='w-72 h-11 bg-blue-700 text-white'>Continue & CHECKOUT</button>
                            <button className='w-72 h-11 bg-red-500 text-white'>CLEAR CART & BACK</button>
                            <div className='w-72 h-11 text-blue-900 flex justify-start items-center gap-2 cursor-pointer'>
                                <IoMdArrowRoundBack/>
                                <p>Continue Shopping</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}