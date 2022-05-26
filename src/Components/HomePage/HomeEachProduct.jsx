import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {Link} from "react-router-dom";
import {BiHeart} from 'react-icons/bi'
import { RatingStar } from "rating-star";
import {useNavigate} from 'react-router-dom'
import {useLocation} from "react-router-dom";
import {QuantityGlobal} from "../QuantityHandel/QuantityGlobal";
import {TiPlus} from "react-icons/ti";
import {RiDeleteBinLine , RiShoppingCartFill} from "react-icons/ri";

export const HomeEachProduct = ({ids}) =>
{
    const EachProduct = useSelector(state => selectMasterDataById(state , ids))
    const Navigate = useNavigate()
    const location = useLocation()

    const {product , image , id , price , offer , rate , quantity} = EachProduct

    const { HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = QuantityGlobal(EachProduct)

    return (
        <div className=' w-full h-full bg-white p-3 flex flex-col justify-start items-center'>
            <div className='w-auto group relative h-3/4' >
                <img className={`w-auto h-full cursor-pointer ${price === 'out' && 'filter grayscale'}`} src={image.mainImg} alt={product} onClick={()=> Navigate(`/details/${id}`)}/>
                <div className={`w-full h-10 absolute bottom-0 opacity-0 group-hover:opacity-95 ${price === 'out' && 'hidden'}  flex justify-around items-center bg-white transition cursor-pointer`}>
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

                {CheckQuantity(id) >= 1 && <div className='w-8 h-8 bg-blue-700 rounded-full absolute top-0 right-0 flex justify-center items-center'><RiShoppingCartFill className='text-white'/></div>}
            </div>


            <div className='w-full h-10 py-6 flex justify-center items-center '>
                {
                    offer > 0 ?
                        <div className='w-full flex justify-evenly items-center'>
                            <p className='text-xl font-medium text-gray-600'>${(price - (price * offer / 100)).toFixed(2)}</p>
                            <p className='font-medium line-through text-red-500'>${price}</p>
                        </div>
                        :
                        <div className='w-full flex justify-evenly items-center'>
                            <p className='font-medium text-xl text-gray-600'>{price === 'out' ? <p className='text-xl text-red-500 font-bold'>out of stock</p>:`$${price}` }</p>
                        </div>
                }
            </div>

            <p className='w-9/12 h-8 flex items-center justify-center font-medium text-gray-500'>{product}</p>

            <div className='w-full flex justify-between items-center py-1'>
                <RatingStar id={id.toString()} rating={rate} size={17}/>
                <Link to={`quick/${id}`} state={{background : location}} className='text-sm font-medium text-gray-400'>Quick View</Link>
            </div>
        </div>

    )
}