import {Shop_Panel} from "./Shop_Panel";
import {CartEachProduct} from "./CartEachProduct";
import {useGetLiveWidth} from "../Helper/useGetLiveWidth";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../Redux/CartShopSlice";

export const Products_Panel = () =>
{

    const {liveWidth} = useGetLiveWidth()
    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)
    const [ShippingFee , setShippingFee] = useState(5)
    const [continueShopping , setContinueShopping] = useState(true)
    const CartProduct = useSelector(state => selectCartShopIds(state))

    const Render = CartProduct.map(ids => <CartEachProduct key={ids} ids={ids}/>)

    return (
        <div className='w-full mt-8'>

            <div className='
                container h-[50rem] mx-auto flex relative
                xs:flex-col
                lg:flex-row lg:justify-evenly lg:items-start'>


                <div className={`
                    ${continueShopping ? liveWidth < 500 && 'animate__animated animate__bounceInLeft' : liveWidth < 500 && 'animate__animated animate__backOutLeft'}
                    flex flex-col justify-between items-center xs:w-full lg:w-8/12 lg:bg-gray-100 lg:rounded-3xl `}>

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
                        {Render}
                    </div>
                </div>

                <Shop_Panel/>
            </div>


        </div>
    )
}