import {useState} from "react";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../Redux/CartShopSlice";
import {CartPageEachCart} from "./CartPageEachCart";
import {HeaderUp} from "../Header/HeaderUp";

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
                        <div className='w-full h-14 flex items-start text-3xl font-bold border-b border-b-gray-300'>Order Summary</div>
                        <div className='w-full h-16 flex justify-between items-center'>
                            <p>items 3</p>
                            <p>$553.3</p>
                        </div>
                        <div className='w-full h-28  flex flex-col justify-evenly items-start'>
                            <label htmlFor='shipping'>SHIPPING</label>
                            <select id='shipping' className='border-none'>
                                <option>Standard delivery</option>
                            </select>
                        </div>
                        <div  className='w-full h-28  flex flex-col justify-evenly items-start'>
                            <label htmlFor='promo-code'>PROMO CODE</label>
                            <input id='promo-code' placeholder='inter your code' className='w-72 h-11 p-3'/>
                        </div>
                        <div className='w-full h-16  flex items-center'>
                            <button className='w-24 h-11 bg-blue-700 text-white'>APPLY</button>
                        </div>
                        <div className='w-full h-16  flex justify-between items-center border-b border-b-gray-300'>
                            <p>TOTAL COST</p>
                            <p>$ 552</p>
                        </div>
                        <div className='w-full h-36  flex flex-col justify-evenly items-center'>
                            <button className='w-72 h-11 bg-blue-700 text-white'>CHECKOUT</button>
                            <button className='w-72 h-11 bg-red-500 text-white'>CLEAR CART AND BACK</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}