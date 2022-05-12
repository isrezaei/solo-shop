import {useSelector , useDispatch} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {AddQuantity , IncreaseQuantity , DecreaseQuantity , RemoveQuantity} from "../../Redux/MasterDataSlice";
import {Link} from "react-router-dom";
import {HaveQuantity , CheckQuantity} from "../../HelperFuncs/HelperFuncs";
import {AddToCard} from "../../Redux/CartShopSlice";
import {TiPlus} from 'react-icons/ti'
import {RiDeleteBinLine} from 'react-icons/ri'
import {BiHeart} from 'react-icons/bi'
import { RatingStar } from "rating-star";
import {useNavigate} from 'react-router-dom'


export const HomeEachProduct = ({ids}) =>
{

    const dispatch = useDispatch()
    const EachProduct = useSelector(state => selectMasterDataById(state , ids))
    const Navigate = useNavigate()

    const {product , image , id , quantity , price , offer , rate} = EachProduct

    const Price = new Intl.NumberFormat('en-IN').format(price)

    console.log(EachProduct)

    const AddQuan  = () =>
    {
        dispatch(AddQuantity(
            {
                id,
                quantity : 1 ,
                price
            }
        ))

        dispatch(AddToCard(EachProduct))
    }

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
    }

    return (


        <div className=' w-full h-full bg-white p-3 flex flex-col justify-start items-center'>

            <div className='w-auto group relative h-3/4' >

                <img className='w-auto h-full cursor-pointer' src={image.mainImg} alt={product} onClick={()=> Navigate(`/details/${id}`)}/>


                <div className='w-full h-10 absolute bottom-0 opacity-0 group-hover:opacity-95  flex justify-around items-center bg-white transition cursor-pointer'>

                    <div className='w-6/12 flex justify-evenly items-center h-10'>

                        {
                            HaveQuantity(id) ?

                                <TiPlus onClick={IncQuan} className='text-base text-indigo-400'/>
                                :

                                <div className='flex w-full ' onClick={AddQuan}>
                                    <p className='font-medium'>Add to cart</p>
                                </div>
                        }

                        <p className='text-xl'> {quantity}</p>

                        {CheckQuantity(id) === 1 && <RiDeleteBinLine onClick={RemQuan} className='text-base text-rose-500'/>}
                        {CheckQuantity(id) > 1 && <button onClick={DecQuan}>-</button>}

                    </div>

                    <div className='w-4/12 flex justify-end'>
                        <BiHeart className='text-xl'/>
                    </div>

                </div>

            </div>


            <div className='w-full h-10 py-6 flex justify-center items-center '>
                {
                    offer > 0 ?
                        <div className='w-full flex justify-evenly items-center'>
                            <p className='text-xl font-medium text-gray-600'>${(price - (price * offer / 100)).toFixed(2)}</p>
                            <p className='font-medium line-through text-red-500'>${Price}</p>
                        </div>
                        :
                        <div className='w-full flex justify-evenly items-center'>
                            <p className='font-medium text-xl text-gray-600'>{price === 'out' ? 'out of stock ':`$${price}` }</p>
                        </div>
                }
            </div>


            <p className='w-9/12 h-8 flex items-center justify-center font-medium text-gray-500'>{product}</p>

            <div className='w-full flex justify-between items-center py-1'>
                <RatingStar id={id} rating={rate} size={17}/>
                <p className='text-sm font-medium text-gray-400'>Quick View</p>
            </div>


        </div>



    )
}