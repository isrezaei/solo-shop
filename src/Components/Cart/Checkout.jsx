import {IoMdArrowRoundBack} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {DeleteAllCarts} from "../../Redux/reducer/CartShopSlice";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ResetAndClearAllTotal} from "../../Redux/reducer/MasterDataSlice";

export const Checkout = () =>
{


    const dispatch = useDispatch()
    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)

    const Navigation = useNavigate()

    const clearAndBack = () =>
    {
        dispatch(DeleteAllCarts())
        dispatch(ResetAndClearAllTotal())
        Navigation('/')
    }


    return(
            <div className='w-56 flex flex-col justify-center items-center space-y-3 p-5 bg-gray-100 xs:rounded-xl'>

                <div className='w-full flex items-start text-neutral-500 font-bold '>
                    <p>Order Summary</p>
                </div>
                <div className='w-full flex justify-between items-center border-y border-y-gray-300 py-2'>
                    <p className='xs:text-xs text-neutral-500'>ITEMS {totalQuantity}</p>
                    <p className='xs:text-xs text-neutral-500 font-bold'>${totalPrice.toFixed(2)}</p>
                </div>

                <div className='w-full flex flex-col justify-center items-start space-y-1'>
                    <button className='xs:text-xs text-lime-600'>CHECKOUT</button>
                    <button className='xs:text-xs text-red-600' onClick={clearAndBack}>CLEAR CART & BACK</button>
                        <Link to='/'>
                            <p className='xs:text-xs text-gray-600'>Back to shopping</p>
                        </Link>

                </div>
            </div>
    )
}