import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {Link} from "react-router-dom";
import { RatingStar } from "rating-star";
import {useNavigate} from 'react-router-dom'
import {useLocation} from "react-router-dom";
import {HiShoppingCart} from 'react-icons/hi'
import {useGetLiveWidth} from "../useGetLiveWidth";

export const HomeEachProduct = ({ids}) =>
{
    const {product , image , id , price , offer , rate , quantity}  = useSelector(state => selectMasterDataById(state , ids))
    const Navigate = useNavigate()
    const location = useLocation()
    const {liveWidth} = useGetLiveWidth()


    const PriceWithOffer = parseInt((price - ((price * offer) / 100)))


    return (
        <div className='animate__animated animate__backInUp animate__faster
        w-full bg-white flex flex-col items-center relative
        xs:h-80 xs:justify-center xs:rounded-3xl
        lg:h-full lg:p-5 lg:justify-start lg:rounded-none'>

            <div className='
            group relative
            lg:w-auto lg:h-3/4
            '>
                <img className={`
                ${price === 'out' && 'filter grayscale'}
                xs:w-auto xs:h-36
                lg:w-auto lg:h-full lg:cursor-pointer`} src={image.mainImg} alt={product} onClick={()=> Navigate(`/details/${id}`)}/>
            </div>


            <div className='
            w-full flex justify-center items-center
            xs:h-8 xs:py-0 xs:mt-1
            lg:h-10 lg:py-6 lg:mt-0
             '>
                {
                    offer > 0 ?
                        <div className='w-full flex justify-evenly items-center'>
                            <p className='
                            font-medium text-gray-600
                            xs:text-sm
                            lg:text-xl
                            '>${PriceWithOffer}</p>
                            <p className='
                            font-medium line-through text-red-500
                            xs:text-sm
                            lg:text-xl
                            '>${price}</p>
                        </div>
                        :
                        <div className='w-full flex justify-evenly items-center'>
                            <div className='
                            font-medium text-gray-600
                            xs:text-sm
                            lg:text-xl
                            '>
                                {price === 'out' ?
                                    <div className='
                                    text-red-500 font-bold
                                    xs:text-sm
                                    lg:text-xl '>out of stock</div>
                                    : <p>${price}</p> }
                            </div>
                        </div>
                }
            </div>

            <p className='
            flex items-center justify-center font-medium text-gray-500
            xs:text-[.8rem] xs:w-full
            lg:text-[1rem] lg:w-9/12
            '>{product}</p>

            <div className='
            w-full flex items-center xs:py-0 lg:py-1
            xs:flex-col xs:justify-center
            lg:flex-row xs:justify-between
            '>
                <RatingStar id={id.toString()} rating={rate} size={liveWidth < 500 ? 13 : 17}/>
                <Link to={`quick/${id}`} state={{background : location}} className='xs:text-[.7rem] lg:text-sm font-medium text-gray-400'>Quick View</Link>
            </div>

            {quantity >= 1 && <div className='absolute right-3 top-5 w-9 h-9 rounded-full flex justify-center items-center bg-blue-600'><HiShoppingCart className='text-2xl text-gray-50'/></div>}

        </div>

    )
}