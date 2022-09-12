import {Shop_Panel} from "./Shop_Panel";
import {Each_Product} from "./Each_Product";
import {useGetLiveWidth} from "../Helper/useGetLiveWidth";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../Redux/CartShopSlice";
import {Open_Close_Counter} from "./Open_Close_Counter";
import {IoArrowRedo, IoArrowUndoSharp} from "react-icons/io5";


export const Parent_Each_Product = () =>
{

    const {liveWidth} = useGetLiveWidth()
    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)
    const CartProduct = useSelector(state => selectCartShopIds(state))


    return (
        <div className='w-full'>

            <div className='
                mx-auto flex relative
                xs:h-[35rem] xs:flex-col
                md:h-[38rem] md:flex-row md:justify-evenly md:items-center
                lg:h-[50rem] lg:flex-row lg:justify-evenly lg:items-center'>


                <div className='
                flex flex-col justify-between items-center
                xs:w-full
                md:w-[33rem] md:bg-gray-100 md:rounded-3xl
                lg:w-[45rem] lg:bg-gray-100 lg:rounded-3xl
                '>

                    <div className='xs:w-full xs:h-8 lg:h-20 lg:w-11/12  px-4 flex justify-between items-center border-b border-b-gray-200'>
                        <p className='xs:text-sm lg:text-xl text-neutral-500 font-bold'>Shopping Cart</p>
                        <p className='xs:text-sm lg:text-xl font-bold text-neutral-500'>{totalQuantity} Items</p>
                    </div>

                    <div className='lg:w-[35rem] 2xl:w-[45rem] h-20 relative flex justify-between items-center xs:hidden lg:flex'>
                        <p className='text-gray-400 text-sm text-neutral-500 bg-gray-100 font-bold px-4 rounded-full'>PRODUCT DETAILS</p>
                        <p className='text-gray-400 text-sm text-neutral-500 bg-gray-100 font-bold px-4 rounded-full'>QUANTITY</p>
                        <p className='text-gray-400 text-sm text-neutral-500 bg-gray-100 font-bold px-4 rounded-full'>Colors</p>
                        <p className='text-gray-400 text-sm text-neutral-500 bg-gray-100 font-bold px-4 rounded-full'>Capacity</p>
                        <p className='text-gray-400 text-sm text-neutral-500 bg-gray-100 font-bold px-4 rounded-full'>TOTAL</p>
                    </div>

                    <div className='
                        overflow-y-scroll scrollbar-hide
                        xs:w-full xs:h-[33rem]
                        lg:w-auto lg:h-[40rem] lg:flex lg:flex-col lg:justify-start lg:items-center'>
                        {CartProduct.map(ids => <Each_Product key={ids} ids={ids}/>)}
                    </div>
                </div>

                <span className='xs:hidden md:flex md:w-auto'>
                    <Shop_Panel/>
                </span>

                <span className='xs:block md:hidden'>
                    <Open_Close_Counter/>
                </span>

            </div>
        </div>
    )
}