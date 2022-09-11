import {useSelector} from "react-redux";
import {DiscountedCalculation} from "../../Products_Page/Utility_Fils/DiscountedCalculation";
import {IoBookmarksOutline , IoBookmarksSharp} from 'react-icons/io5'
import {Link} from "react-router-dom";
import {BsBookmarkFill , BsBookmark} from 'react-icons/bs'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {FiEye} from 'react-icons/fi'

export const RenderResultSearch = ({products}) =>
{


    const {id , product , price , color , image , detailsImage , capacity , offer} = products

    const discountedPrice = parseInt((price - ((price * offer) / 100)))

    const showColors = color?.map(colors => {
        return (
            <div key={colors} style={{background : colors}} className='xs:w-4 xs:h-4 2xl:w-5 2xl:h-5 rounded-full shadow-inner border border-gray-300'></div>
        )
    })



    return (
        <div className='
        bg-white flex justify-around items-center cursor-pointer relative rounded-3xl
        xs:w-72 xs:h-[8rem] xs:my-2
        lg:w-80 lg:h-40 lg:my-2
        2xl:w-96 2xl:h-44  2xl:my-3
        '>
            <img className='xs:w-16 lg:w-20 2xl:w-24' src={image.mainImg}/>


            <div className='xs:w-40 lg:w-48 2xl:w-52 h-full flex flex-col justify-center items-start gap-3'>

                <p className='xs:text-[.8rem] lg:text-sm 2xl:text-[1rem] font-bold text-neutral-500'>{product}</p>

                <div className='w-full flex justify-start items-center gap-3'>
                    {
                        price === 'out' ? <p className='xs:text-[.8rem] lg:text-sm 2xl:text-lg font-bold text-rose-600'>out of stock</p>
                            : <p className={`xs:w-8 lg:w-10 xs:text-[.8rem] lg:text-sm 2xl:text-[1rem] ${offer !== 0 ? 'opacity-50 font-bold line-through text-gray-600' : 'text-gray-600 font-bold'}`}>${parseInt(price)}</p>
                    }

                    {
                        price !== 'out' && offer !== 0 &&
                        <div className='
                        bg-red-500 text-white flex items-center justify-center rounded-full
                        xs:w-9 xs:h-5 xs:text-[.8rem]
                        lg:w-8 lg:h-5 lg:text-[.8rem]
                        2xl:w-10 2xl:h-5'>
                            {offer}%
                        </div>
                    }

                    <div className='xs:text-[.8rem] lg:text-sm 2xl:text-[1rem] text-lime-600 font-bold'>{price !== 'out' && offer !== 0 &&  <p>${discountedPrice}</p>}</div>
                </div>

                <div className='flex justify-start items-center gap-2'>
                    {showColors}
                </div>

            </div>

            <Link to={`/details/${id}`}>
            <div className='
            rounded-full  bg-blue-600  absolute flex justify-center items-center
            xs:w-6 xs:h-6 xs:bottom-4 xs:right-2
            lg:w-[1.5rem] lg:h-[1.5rem] lg:bottom-2 lg:right-3
            2xl:w-8 2xl:h-8 2xl:bottom-2 2xl:right-2
            '>
                <FiEye className='text-white xs:text-[.9rem] lg:text-sm 2xl:text-lg' />
            </div>
            </Link>

            <div className='
            rounded-full  bg-neutral-700  absolute flex justify-center items-center
            xs:w-6 xs:h-6 xs:bottom-12 xs:right-2
            lg:w-[1.5rem] lg:h-[1.5rem] lg:bottom-2 lg:right-10
            2xl:w-8 2xl:h-8 2xl:bottom-2 2xl:right-12
            '>
                <IoBookmarksOutline className='text-white xs:text-[.9rem] lg:text-sm lg:text-sm 2xl:text-lg'/>
            </div>

        </div>
    )
}