import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {Link} from "react-router-dom";
import { RatingStar } from "rating-star";
import {useNavigate} from 'react-router-dom'
import {useLocation} from "react-router-dom";

export const HomeEachProduct = ({ids}) =>
{
    const EachProduct = useSelector(state => selectMasterDataById(state , ids))
    const Navigate = useNavigate()
    const location = useLocation()

    const {product , image , id , price , offer , rate , quantity} = EachProduct

    const PriceWithOffer = parseInt((price - ((price * offer) / 100)))


    return (
        <div className=' w-full h-full bg-white p-3 flex flex-col justify-start items-center'>
            <div className='w-auto group relative h-3/4' >
                <img className={`w-auto h-full cursor-pointer ${price === 'out' && 'filter grayscale'}`} src={image.mainImg} alt={product} onClick={()=> Navigate(`/details/${id}`)}/>
            </div>


            <div className='w-full h-10 py-6 flex justify-center items-center '>
                {
                    offer > 0 ?
                        <div className='w-full flex justify-evenly items-center'>
                            <p className='text-xl font-medium text-gray-600'>${PriceWithOffer.toFixed(2)}</p>
                            <p className='font-medium line-through text-red-500'>${price}</p>
                        </div>
                        :
                        <div className='w-full flex justify-evenly items-center'>
                            <div className='font-medium text-xl text-gray-600'>{price === 'out' ? <div className='text-xl text-red-500 font-bold'>out of stock</div>: <p>${price}</p> }</div>
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