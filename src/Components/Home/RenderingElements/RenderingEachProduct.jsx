import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {Link} from "react-router-dom";
import {RatingStar } from "rating-star";
import {useNavigate} from 'react-router-dom'
import {useLocation} from "react-router-dom";
import {HiShoppingCart} from 'react-icons/hi'
import {useGetLiveWidth} from "../../Helper/useGetLiveWidth";

export const RenderingEachProduct = ({ids}) =>
{
    const {product , image , id , price , offer , rate , quantity}  = useSelector(state => selectMasterDataById(state , ids))
    const Navigate = useNavigate()
    const location = useLocation()
    const {liveWidth} = useGetLiveWidth()


    const PriceWithOffer = parseInt((price - ((price * offer) / 100)))


    return (
        <div className='animate__animated animate__backInUp animate__faster
        w-full bg-white rounded-3xl flex flex-col items-center
        xs:h-80 xs:justify-center
        lg:h-96 lg:p-5 lg:justify-start
        2xl:h-full'>
            <div className='
            group relative
            lg:w-auto lg:h-52
            2xl:h-3/4'>
                <img className={`${price === 'out' && 'filter grayscale'} cursor-pointer w-auto xs:h-36 md:h-44 lg:h-full 2xl:h-full`}
                     src={image.mainImg} alt={product} onClick={()=> Navigate(`/details/${id}`)}/>

                {/*Show the availability of the product in the shopping cart*/}
                {
                    quantity >= 1 &&
                    <div className='
                      absolute rounded-full flex justify-center items-center bg-blue-100
                      xs:right-1 xs:top-1 xs:w-6 xs:h-6
                      lg:right-2 lg:top-2 lg:w-7 lg:h-7
                      2xl:right-3 2xl:top-3 2xl:w-9 2xl:h-9'>
                        <HiShoppingCart className='text-blue-900 xs:text-lg lg:text-xl 2xl:text-2xl'/>
                    </div>
                }
            </div>


            <div className='
            w-full flex justify-center items-center
            xs:h-8  xs:py-0  xs:mt-1
            lg:h-10 lg:py-6 lg:mt-0'>
                {
                    offer > 0 ?
                        <div className='w-full flex justify-evenly items-center'>
                            <p className='
                            font-medium text-gray-600
                            xs:text-sm
                            lg:text-lg
                            2xl:text-xl
                            '>${PriceWithOffer}</p>

                            <p className='
                            font-medium line-through text-red-500
                            xs:text-sm
                            lg:text-lg
                            2xl:text-xl
                            '>${price}</p>
                        </div>
                        :
                        <div className='w-full flex justify-evenly items-center'>
                            <div className='
                            font-medium text-gray-600
                            xs:text-sm
                            lg:text-lg
                            2xl:text-xl
                            '>
                                {price === 'out' ?
                                    <div className='
                                    text-red-500 font-bold
                                    xs:text-sm
                                    lg:text-lg
                                    2xl:text-xl'>out of stock</div> : <p>${price}</p>
                                }
                            </div>
                        </div>
                }
            </div>

            <p className='
            flex items-center justify-center w-full font-medium text-gray-500
            xs:text-[.8rem]
            lg:text-[.8rem]
            2xl:text-[1rem]
            '>{product}</p>

            <div className='
            w-full flex items-center xs:py-0 lg:py-1
            xs:flex-col xs:justify-center
            2xl:flex-row 2xl:justify-between
            '>
                <RatingStar id={id.toString()} rating={rate} size={liveWidth < 500 ? 13 : 17}/>
                <Link to={`quick/${id}`} state={{background : location}}
                      className='
                      font-medium text-gray-400
                      xs:text-[.7rem]
                      lg:text-[.8rem]
                      2xl:text-sm'>Quick View</Link>
            </div>
        </div>

    )
}