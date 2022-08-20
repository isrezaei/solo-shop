import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCartShopIds , DeleteAllCarts} from "../../Redux/CartShopSlice";
import {CartEachProduct} from "./CartEachProduct";
import {HeaderUp} from "../Header/HeaderUp";
import {IoMdArrowRoundBack} from 'react-icons/io'
import {ResetAndClearAllTotal} from "../../Redux/MasterDataSlice";
import {CartEmptyAlert} from "./CartEmptyAlert";
import {useNavigate} from "react-router-dom";
import {useGetLiveWidth} from "../useGetLiveWidth";
import {MdNavigateNext} from 'react-icons/md'
import {IoArrowRedo , IoArrowUndoSharp} from 'react-icons/io5'

export const CartPreRender = () =>
{
    const dispatch = useDispatch()
    const CartProduct = useSelector(state => selectCartShopIds(state))
    const Render = CartProduct.map(ids => <CartEachProduct key={ids} ids={ids}/>)
    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)
    const {liveWidth} = useGetLiveWidth()
    const [ShippingFee , setShippingFee] = useState(5)
    const [continueShopping , setContinueShopping] = useState(true)
    const [headerPosition] = useState('relative');
    const Navigation = useNavigate()


    const clearAndBack = () =>
    {
        dispatch(DeleteAllCarts())
        dispatch(ResetAndClearAllTotal())
        Navigation('/')
    }


    return (
        <>
            <HeaderUp headerPosition={headerPosition}/>

            {Render.length === 0 ? <CartEmptyAlert/> : <div className='w-full mt-8'>


                <div className='
                container h-150 max-w-screen-2xl mx-auto flex relative
                xs:flex-col
                lg:flex-row lg:justify-evenly lg:items-start
                '>


                    <div className={`
                    ${continueShopping ? liveWidth < 500 && 'animate__animated animate__bounceInLeft' : liveWidth < 500 && 'animate__animated animate__backOutLeft'}
                    flex flex-col justify-between items-center xs:w-full lg:w-8/12`
                    }>

                        <div className='xs:w-full xs:h-8 lg:h-20 lg:w-11/12  px-4 flex justify-between items-center border-b border-b-gray-200'>
                            <p className='xs:text-sm lg:text-2xl font-bold text-gray-600'>Shopping Cart</p>
                            <p className='xs:text-sm lg:text-2xl font-bold text-gray-600'>{totalQuantity} Items</p>
                        </div>


                        <div className='w-11/12 h-20 relative flex justify-between items-center xs:hidden lg:flex'>
                            <p className='absolute text-gray-400 left-6'>PRODUCT DETAILS</p>
                            <p className='absolute text-gray-400 left-128.5'>QUANTITY</p>
                            <p className='absolute text-gray-400 left-141'>PRICE</p>
                            <p className='absolute text-gray-400 right-16'>TOTAL</p>
                        </div>


                        <div className='w-full xs:h-[28rem] lg:h-[40rem] overflow-y-scroll scrollbar-hide'>
                            {Render}
                        </div>


                    </div>


                    <div className={`
                   
                    ${continueShopping ? liveWidth < 500 && 'animate__animated animate__backOutLeft hidden' : liveWidth < 500 && 'animate__animated animate__bounceInLeft block'} 
                                      
                    p-6 bg-gray-100
                    xs:absolute xs:w-11/12 xs:h-[34rem] xs:top-3 xs:left-4 xs:rounded-3xl
                    lg:relative lg:w-3/12 lg:h-full lg:top-0 lg:rounded-none lg:block lg:animate__animated lg:animate__bounceIn
                    `}>


                        <div className='w-full flex items-start text-gray-600 font-bold border-b border-b-gray-300 xs:h-10 xs:text-lg lg:h-14 lg:text-3xl '>Order Summary</div>

                        <div className='w-full xs:h-12 lg:h-16 flex justify-between items-center'>
                            <p className='xs:text-sm lg:text-xl'>ITEMS {totalQuantity}</p>
                            <p className='xs:text-sm lg:text-xl text-gray-700'>${totalPrice.toFixed(2)}</p>
                        </div>

                        <div className='xs:h-20 lg:h-28 w-full flex flex-col justify-center gap-y-1 items-start'>
                            <label htmlFor='shipping' className='text-gray-500 text-sm'>SHIPPING</label>
                            <select id='shipping' className='border-none w-full xs:text-sm xs:rounded-2xl lg:text-[1rem] lg:rounded-none'>
                                <option>Standard delivery - $5.00</option>
                                <option>Fast delivery - $20.00</option>
                            </select>
                        </div>

                        <div  className='xs:h-20 lg:h-28 w-full flex flex-col justify-center gap-y-1 items-start'>
                            <label htmlFor='promo-code' className='text-gray-500 text-sm'>PROMO CODE</label>
                            <input id='promo-code' placeholder='inter your code' className='w-full h-11 p-3 xs:text-sm xs:rounded-2xl lg:text-[1rem] lg:rounded-none'/>
                        </div>
                        <div className='xs:h-16 lg:h-24 w-full flex items-center border-b border-b-gray-300'>
                            <button className='xs:w-20 xs:h-8 lg:w-24 lg:h-11 bg-blue-700 text-white xs:rounded-full xs:text-sm lg:rounded-none lg:text-[1rem]'>APPLY</button>
                        </div>

                        <div className='w-full h-16 flex justify-between items-center'>
                            <p className='xs:text-sm lg:text-[1rem] text-gray-500'>TOTAL COST</p>
                            <p className='xs:text-sm lg:text-2xl font-bold text-blue-700'>${(totalPrice + ShippingFee).toFixed(2)}</p>
                        </div>

                        <div className='w-full xs:h-36 lg:h-56  flex flex-col justify-center gap-3 items-center'>
                            <button className='w-72 xs:h-8 xs:rounded-full xs:text-sm lg:h-11 lg:rounded-none lg:text-[1rem] bg-blue-700 text-white'>Continue & CHECKOUT</button>
                            <button className='w-72 xs:h-8 xs:rounded-full xs:text-sm lg:h-11 lg:rounded-none lg:text-[1rem] bg-red-500 text-white' onClick={clearAndBack}>CLEAR CART & BACK</button>
                            <div className='w-72 h-11 text-blue-900 flex justify-start items-center gap-2 cursor-pointer'>
                                <IoMdArrowRoundBack className='xs:text-sm lg:text-[1rem]'/>
                                <p className='xs:text-sm lg:text-[1rem]'>Continue Shopping</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div onClick={()=> setContinueShopping( value=> !value) }
                     className='xs:flex lg:hidden justify-center items-center text-xl absolute top-[4rem] shadow-md left-4 w-12 h-6 rounded-full bg-neutral-200 text-gray-400 '>

                    {continueShopping ? <IoArrowRedo size={18}/>  : <IoArrowUndoSharp size={18}/>}
                </div>


            </div>
            }
        </>
    )
}