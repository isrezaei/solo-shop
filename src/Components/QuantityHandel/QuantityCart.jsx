import {useDispatch} from "react-redux";
import {DecreaseQuantity, IncreaseQuantity, RemoveQuantity} from "../../Redux/MasterDataSlice";
import {DeleteToCard} from "../../Redux/CartShopSlice";
import {CheckQuantity} from "../../HelperFuncs/HelperFuncs";
import {TiPlus , TiMinus} from "react-icons/ti";

export const QuantityCart = ({CartSlice , MasterSlice}) =>
{

    const {quantity} = MasterSlice
    const {image , product , price , id , brand} = CartSlice

    const dispatch = useDispatch()


    const IncQuan = () =>
    {
        dispatch(IncreaseQuantity({
            id,
            quantity : quantity + 1,
            price
        }))
    }

    const DecQuan = () =>
    {
        dispatch(DecreaseQuantity({
            id,
            quantity : quantity - 1,
            price

        }))
    }

    const RemQuan = () =>
    {
        dispatch(RemoveQuantity({
            id,
            price
        }))
        dispatch(DeleteToCard(id))
    }


    return (
        <div className='flex h-40 justify-evenly items-center'>

            <div className='w-80 h-full flex  items-center'>
                <img id='product-image' className='w-24' src={image.mainImg}  alt={product}/>
                <div className='h-28 flex flex-col justify-evenly ml-4'>
                    <p>{product}</p>
                    <p>{brand}</p>
                    <p onClick={RemQuan}>Delete</p>
                </div>
            </div>


            <div className='w-36 flex justify-evenly items-center'>
                <button className='w-8 h-8 flex justify-center items-center text-red-500 disabled:opacity-50' disabled={CheckQuantity(id) <= 1} onClick={DecQuan}>
                    <TiMinus/>
                </button>
                <p className='w-10 text-center p-2 border border-gray-300 '> {quantity}</p>
                <button className='w-6 h-6 flex justify-center items-center rounded-full bg-blue-700 text-white' onClick={IncQuan}>
                    <TiPlus/>
                </button>
            </div>

            <p className='w-24 text-center'>${price}</p>
            <p className='w-24 text-center text-xl font-bold'>${CheckQuantity(id) * price} </p>

        </div>
    )

}