import {IoMdArrowRoundBack} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {DeleteAllCarts, selectCartShopIds} from "../../Redux/CartShopSlice";
import {useGetLiveWidth} from "../Helper/useGetLiveWidth";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ResetAndClearAllTotal} from "../../Redux/MasterDataSlice";
import {IoArrowRedo, IoArrowUndoSharp} from "react-icons/io5";
import {Open_Close_Counter} from "./Open_Close_Counter";

export const Shop_Panel = () =>
{


    const dispatch = useDispatch()
    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)
    const {liveWidth} = useGetLiveWidth()
    const [ShippingFee , setShippingFee] = useState(5)

    const Navigation = useNavigate()

    const clearAndBack = () =>
    {
        dispatch(DeleteAllCarts())
        dispatch(ResetAndClearAllTotal())
        Navigation('/')
    }


    return(
        <>
            <div className={`                                      
                    p-6 bg-gray-100
                    xs:w-11/12 xs:h-[34rem] xs:rounded-3xl
                    lg:relative lg:w-[25rem] lg:h-[40rem] lg:top-0 lg:block lg:animate__animated lg:animate__bounceIn`}>


                <div className='w-full flex items-start text-neutral-500 font-bold border-b border-b-gray-300 xs:h-10 xs:text-lg lg:h-10 lg:text-xl '>
                    <p>Order Summary</p>
                </div>

                <div className='w-full xs:h-12 lg:h-16 flex justify-between items-center'>
                    <p className='xs:text-sm lg:text-lg text-neutral-500'>ITEMS {totalQuantity}</p>
                    <p className='xs:text-sm lg:text-lg text-neutral-500 font-bold'>${totalPrice.toFixed(2)}</p>
                </div>

                <div className='xs:h-20 lg:h-20 w-full flex flex-col justify-center gap-y-1 items-start'>
                    <label htmlFor='shipping' className='text-gray-500 text-sm'>SHIPPING</label>
                    <select id='shipping' className='border-none w-full xs:text-sm xs:rounded-2xl lg:text-[.9rem]'>
                        <option>Standard delivery - $5.00</option>
                        <option>Fast delivery - $20.00</option>
                    </select>
                </div>

                <div  className='xs:h-20 lg:h-20 w-full flex flex-col justify-center gap-y-1 items-start'>
                    <label htmlFor='promo-code' className='text-gray-500 text-sm'>PROMO CODE</label>
                    <input id='promo-code' placeholder='inter your code' className='w-full h-11 p-3 xs:text-sm xs:rounded-2xl lg:text-[1rem]'/>
                </div>

                <div className='xs:h-16 lg:h-10 lg:pb-4 lg:mt-5 w-full flex items-center border-b border-b-gray-300'>
                    <button className='xs:w-20 xs:h-8 xs:rounded-full xs:text-sm lg:w-20 lg:h-8 bg-blue-700 text-white lg:text-[.8rem]'>APPLY</button>
                </div>

                <div className='w-full h-16 flex justify-between items-center'>
                    <p className='xs:text-sm lg:text-[.9rem] text-gray-500'>TOTAL COST</p>
                    <p className='xs:text-sm lg:text-xl font-bold text-blue-700'>${(totalPrice + ShippingFee).toFixed(2)}</p>
                </div>

                <div className='w-full xs:h-36 lg:h-56  flex flex-col justify-center gap-3 items-center'>
                    <button className='w-72 xs:h-8 xs:rounded-full xs:text-sm lg:w-52 lg:h-10 lg:text-[.9rem] bg-blue-700 text-white'>Continue & CHECKOUT</button>
                    <button className='w-72 xs:h-8 xs:rounded-full xs:text-sm lg:w-52 lg:h-10 lg:text-[.9rem] bg-red-500 text-white' onClick={clearAndBack}>CLEAR CART & BACK</button>
                    <div className='w-40 h-8 rounded-full text-blue-900 flex justify-center items-center gap-2 cursor-pointer bg-white'>
                        <IoMdArrowRoundBack className='xs:text-sm lg:text-[1rem]'/>
                        <Link to='/'>
                            <p className='xs:text-sm lg:text-sm'>Back to shopping</p>
                        </Link>
                    </div>
                </div>

            </div>

        </>
    )
}