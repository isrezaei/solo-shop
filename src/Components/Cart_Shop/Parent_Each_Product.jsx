import {Shop_Panel} from "./Shop_Panel";
import {Each_Product} from "./Each_Product";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../Redux/CartShopSlice";
import {Open_Close_Counter} from "./Open_Close_Counter";


export const Parent_Each_Product = () =>
{
    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)
    const CartProduct = useSelector(state => selectCartShopIds(state))

    return (
            <div className='
                w-full mx-auto flex relative
                xs:h-[35rem] xs:flex-col xs:my-8
                md:h-[55rem] md:flex-row md:justify-evenly md:items-center md:my-0
                lg:h-[50rem] lg:flex-row lg:justify-evenly lg:items-center'>
                <div className='
                flex flex-col justify-between items-center
                xs:w-full
                md:w-[38rem] md:bg-gray-100 md:rounded-3xl
                lg:w-[45rem] lg:bg-gray-100 lg:rounded-3xl
                '>
                    <div className='xs:w-9/12 xs:h-10 md:h-16 md:px-9 lg:h-20 lg:w-11/12 lg:px-4 flex justify-between items-center border-b border-b-gray-200'>
                        <p className='xs:text-sm md:text-lg lg:text-xl text-neutral-500 font-bold'>Shopping Cart</p>
                        <p className='xs:text-sm md:text-lg  lg:text-xl font-bold text-neutral-500'>{totalQuantity} Items</p>
                    </div>
                    <div className='xs:hidden md:flex md:w-[36rem] md:h-16 lg:w-[35rem] lg:h-20 2xl:w-[40rem] relative flex justify-between items-center'>
                        <p className='bg-white text-sm text-neutral-500 font-bold px-4 rounded-full'>PRODUCT DETAILS</p>
                        <p className='bg-white text-sm text-neutral-500 font-bold px-4 rounded-full'>QUANTITY</p>
                        <p className='bg-white text-sm text-neutral-500 font-bold px-4 rounded-full'>Colors</p>
                        <p className='bg-white text-sm text-neutral-500 font-bold px-4 rounded-full'>Capacity</p>
                        <p className='bg-white text-sm text-neutral-500 font-bold px-4 rounded-full'>TOTAL</p>
                    </div>
                    <div className='
                        overflow-y-scroll overflow-x-hidden scrollbar-hide
                        xs:w-full xs:h-[33rem] xs:px-8 xs:flex xs:flex-col xs:justify-start xs:items-center
                        md:w-auto md:h-[35rem] md:px-0 md:flex md:flex-col md:justify-start md:items-center
                        lg:w-auto lg:h-[40rem] lg:px-0 lg:flex lg:flex-col lg:justify-start lg:items-center'>
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
    )
}