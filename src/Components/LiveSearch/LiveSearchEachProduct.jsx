import {useSelector} from "react-redux";
import {DiscountedCalculation} from "../DetailsPage/DiscountedCalculation";
import {IoBookmarksOutline , IoBookmarksSharp} from 'react-icons/io5'
import {Link} from "react-router-dom";
import {BsBookmarkFill , BsBookmark} from 'react-icons/bs'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {FiEye} from 'react-icons/fi'

export const LiveSearchEachProduct = ({products}) =>
{


    const {id , product , price , color , image , detailsImage , capacity , offer} = products

    const discountedPrice = parseInt((price - ((price * offer) / 100)))

    console.log(offer)

    const showColors = color?.map(colors => {
        return (
            <div key={colors} style={{background : colors}} className='w-5 h-5 rounded-full shadow-inner border border-gray-300'></div>
        )
    })



    return (
        <div className='bg-white h-44 p-5 m-3 flex justify-start items-start gap-7 cursor-pointer relative'>

            <div>
                <img className='w-24' src={image.mainImg}/>
            </div>

            <div className='h-full flex flex-col gap-3'>

                <p className='text-lg font-bold text-gray-600'>{product}</p>

                <div className='w-full flex justify-start items-center gap-3'>
                    {
                        price === 'out' ? <p className='font-bold text-rose-600'>out of stock</p>
                            : <p className={`${offer !== 0 ? 'opacity-50 font-bold line-through text-gray-600' : 'text-gray-600 font-bold'}`}>${price}</p>
                    }

                    {price !== 'out' && offer !== 0 && <div className='w-10 h-5 bg-red-500 text-white flex justify-center rounded-full items-center text-sm '>{offer}%</div>}

                    <div className='text-lime-600 font-bold'>{price !== 'out' && offer !== 0 &&  <p>${discountedPrice}</p>}</div>
                </div>

                <div className='flex justify-start items-center gap-2'>
                    {showColors}
                </div>

            </div>

            <Link to={`/details/${id}`}>
            <div className='w-8 h-8 rounded-full bg-blue-600 absolute bottom-2 right-2 flex justify-center items-center'>
                <FiEye className='text-white text-xl' />
            </div>
            </Link>

            <div className='w-8 h-8 rounded-full  bg-neutral-700  absolute bottom-2 right-12 flex justify-center items-center'>
                <IoBookmarksOutline className='text-white text-lg'/>
            </div>

        </div>
    )
}