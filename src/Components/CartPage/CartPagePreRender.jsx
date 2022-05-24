import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../Redux/CartShopSlice";
import {CartPageEachCart} from "./CartPageEachCart";
import {HeaderUp} from "../Header/HeaderUp";

export const CartPagePreRender = () =>
{
    const CartProduct = useSelector(state => selectCartShopIds(state))

    const Render = CartProduct.map(ids => <CartPageEachCart key={ids} ids={ids}/>)

    return (
        <>
            <HeaderUp/>
            <div className='w-full bg-red-300'>
                <div className='container max-w-8xl bg-amber-100 mx-auto mt-36 flex justify-between items-start'>

                    <div>
                        {Render}
                    </div>


                    <div className='w-3/12 h-60  p-6 bg-amber-50'>

                        <div className='w-full h-28 flex items-center text-3xl font-bold border-b-2 border-b-gray-600'>Order Summary</div>

                        <div className='w-full h-16 flex justify-between items-center'>
                            <p>items 3</p>
                            <p>$553.3</p>
                        </div>

                        <div className='w-full h-28  flex flex-col justify-evenly items-start'>
                            <label htmlFor='shipping'>SHIPPING</label>
                            <select id='shipping'>
                                <option>Standard delivery</option>
                            </select>
                        </div>

                        <div  className='w-full h-28  flex flex-col justify-evenly items-start'>
                            <label htmlFor='promo-code'>PROMO CODE</label>
                            <input id='promo-code' placeholder='inter your code'/>
                        </div>

                        <div className='w-full h-16  flex items-center'>
                            <button className='w-24 h-11 bg-blue-700 text-white'>APPLY</button>
                        </div>


                        <div className='w-full h-16  flex justify-between items-center'>
                            <p>TOTAL COST</p>
                            <p>$ 552</p>
                        </div>

                        <div className='w-full h-36  flex flex-col justify-evenly items-center'>
                            <button className='w-72 h-11 bg-lime-500'>CHECKOUT</button>
                            <button className='w-72 h-11 bg-red-400'>CLEAR CART AND BACK</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}