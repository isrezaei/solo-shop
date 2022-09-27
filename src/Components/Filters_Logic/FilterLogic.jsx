import {selectAllMasterData} from "../../Redux/MasterDataSlice";
import {useSelector , useDispatch} from "react-redux";
import {RatingStar} from "rating-star";
import {filterByStars , filterByProduct} from "../../Redux/FilterProductSlice";
import {RangeSlider} from "./RangeSlider";
import {useGetLiveWidth} from "../Helper/useGetLiveWidth";


export const FilterLogic = () =>
{
    const products = useSelector(selectAllMasterData)

    const {product : filteredProduct , stars : filteredStars} = useSelector(state => state.FilterProductSlice)

    const dispatch = useDispatch()

    const {liveWidth} = useGetLiveWidth()


    const typeProduct = ['iphone' , 'ipad' , 'ipod' , 'Watch' , 'Mac' , 'AirPod' ].map(items => {
        return (
            <div key={items} className='
            flex w-full items-center
            xs:justify-center
            md:justify-between
            lg:justify-between'>
                <div className='w-20 flex justify-start items-center gap-2 my-1'>
                    <input className='xs:rounded-full checked:bg-neutral-400' type='checkbox' checked={filteredProduct === items}  onChange={()=> filteredProduct === items ? dispatch(filterByProduct()) : dispatch(filterByProduct(items))}/>
                    <p>{items}</p>
                </div>
                <div className='
                w-8 h-5 bg-neutral-400 text-white flex justify-center items-center
                xs:rounded-full xs:text-[.8rem]
                md:text-sm'>{products.filter(data => data.type === items).length}</div>
            </div>
        )
    })

    const starsProduct = Array.from(Array(5).keys()).map(stars => {
        return (
            <div key={stars} className='flex justify-center items-center'>
                <input className='xs:rounded-full checked:bg-neutral-400' type='checkbox' checked={filteredStars === stars} onChange={()=> filteredStars === stars ? dispatch(filterByStars()) : dispatch(filterByStars(stars))}/>
                <RatingStar id={stars.toString()} rating={stars} noBorder={true} size={liveWidth < 500 ? 20 : 18}/>
            </div>
        )
    }).reverse()


    return (

        <div className=' animate__animated animate__zoomInLeft flex flex-col justify-start items-center
         xs:w-80 xs:px-5 xs:py-3 xs:mt-10 xs:bg-white xs:rounded-2xl
         md:w-[30rem] md:px-8 md:py-2  md:h-auto md:gap-2 md:bg-transparent
         lg:w-96'>

            <div className=' w-full flex flex-col justify-start items-center'>
                <p className='
                w-full font-bold text-center text-neutral-600
                xs:text-sm'>price</p>
                <RangeSlider/>
            </div>

            <p className='
            w-full font-bold text-center text-neutral-600
            xs:text-sm xs:my-3 md:my-0'>Products</p>

            <div className='w-full text-sm
            xs:grid xs:py-2 xs:grid-cols-2 xs:justify-between xs:items-center xs:bg-neutral-100 xs:rounded-2xl
            md:flex md:py-0 md:flex-col md:justify-center md:items-center md:bg-transparent md:rounded-none'>
                {typeProduct}
            </div>

            <p className='
            w-full font-bold text-center text-neutral-600
            xs:text-sm xs:my-3 md:my-0'>Rating</p>

            <div className='w-full
             xs:grid xs:grid-cols-2 xs:bg-neutral-100 xs:rounded-2xl bg-red-500
             md:flex md:flex-col md:justify-center md:items-start md:bg-transparent md:rounded-none'>
                {starsProduct}
            </div>


        </div>
    )
}