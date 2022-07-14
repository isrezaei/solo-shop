import {selectCartShopById} from "../../Redux/CartShopSlice";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {FunReduxDispatchForCartShop} from "../QuantityHandel/FunReduxDispatchForCartShop";
import {RiDeleteBinLine} from "react-icons/ri";
import {CheckQuantity} from "../../HelperFuncs/HelperFuncs";
import {TiMinus, TiPlus} from "react-icons/ti";


export const CartEachProduct = ({ids}) =>
{
    const CartSlice = useSelector(state => selectCartShopById(state , ids))
    const MasterSlice = useSelector(state => selectMasterDataById(state , ids))

    const {increase,decrease,remove} = FunReduxDispatchForCartShop()

    const {quantity , detailsImage} = MasterSlice
    const {image, product, price, discountedPrice, id, color, capacity} = CartSlice

    const EachTotalPrice = parseInt(CheckQuantity(id) * discountedPrice)


    return (
        <div className='flex h-40 justify-evenly items-center'>
            <div className='w-80 h-full flex items-center'>
                <img id='product-image' className='w-36' src={detailsImage[image[product]]}  alt={product}/>
                <div className='h-28 flex flex-col justify-evenly ml-4'>
                    <p className='text-lg font-bold text-gray-500'>{product}</p>
                    <p>See Product</p>
                    <p className='w-8 h-8 bg-red-500 text-center text-xl text-white rounded-2xl flex justify-center items-center cursor-pointer'
                       onClick={()=> remove(id , EachTotalPrice ,quantity)}>
                        <RiDeleteBinLine/>
                    </p>
                </div>
            </div>


            <div className='w-36 flex justify-evenly items-center'>
                <button className='w-8 h-8 flex justify-center items-center text-red-500 disabled:opacity-50' disabled={CheckQuantity(id) <= 1}
                        onClick={()=> decrease(id , discountedPrice , quantity)}>
                    <TiMinus/>
                </button>
                <p className='w-10 text-center p-2 border border-gray-300 '> {quantity}</p>
                <button className='w-6 h-6 flex justify-center items-center rounded-full bg-blue-700 text-white' onClick={()=> increase(id , discountedPrice , quantity)}>
                    <TiPlus/>
                </button>
            </div>

            <p>{color[product]}</p>
            <p>{capacity}</p>

            <p className='w-24 text-center text-gray-500'>${price}</p>
            <p className='w-24 text-center text-blue-700 text-xl font-bold'>${EachTotalPrice}</p>
        </div>
    )
}