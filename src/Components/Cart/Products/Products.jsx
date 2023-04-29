import {Checkout} from "../Checkout";
import {Items} from "./Items";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../../Redux/reducer/CartShopSlice";
import {Modal} from "../Modal";


export const Products = () =>
{
    const {totalQuantity} = useSelector(state => state.MasterDataSlice)
    const CartProduct = useSelector(state => selectCartShopIds(state))

    return (
            <div className='
                w-full mx-auto flex relative
                xs:h-auto xs:my-4 xs:flex-col xs:justify-center xs:items-center
                md:h-[100vh] md:my-0 md:flex-row  md:space-x-5 m-auto '>

                <div className='w-[25rem] xs:p-2 md:p-2 flex flex-col justify-between items-center  rounded-xl bg-neutral-100'>
                    <div className='w-full flex justify-between items-center border-b border-b-gray-200 p-2'>
                        <p className='xs:text-sm  text-neutral-500 font-bold'>Shopping Cart</p>
                        <p className='xs:text-sm  text-neutral-500 font-bold'>{totalQuantity} Items</p>
                    </div>

                    <div className='
                        overflow-auto scrollbar-hide
                        xs:w-full xs:h-[33rem] xs:flex xs:flex-col xs:justify-start xs:items-center
                        md:w-full md:h-[35rem] md:flex md:flex-col md:justify-start md:items-center'>
                        {CartProduct.map(ids => <Items key={ids} ids={ids}/>)}
                    </div>
                </div>

                <span className='xs:hidden md:flex md:w-auto'>
                    <Checkout/>
                </span>

                <span className='xs:block md:hidden'>
                    <Modal/>
                </span>

            </div>
    )
}