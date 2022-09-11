import Slider  from "r-range-slider";
import {useState} from "react";
import {selectAllMasterData} from "../../Redux/MasterDataSlice";
import {useSelector , useDispatch} from "react-redux";
import { RatingStar } from "rating-star";
import {filterByPrice , filterByStars , filterByProduct} from "../../Redux/FilterProductSlice";
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
            xs:justify-around
            lg:justify-between'
            >
                <div className='w-20 flex justify-start items-center gap-2 my-1'>
                    <input className='xs:rounded-full lg:rounded-none' type='checkbox' checked={filteredProduct === items}  onChange={()=> filteredProduct === items ? dispatch(filterByProduct()) : dispatch(filterByProduct(items))}/>
                    <p>{items}</p>
                </div>
                <div className='
                w-8 h-5 bg-blue-600 text-white flex justify-center items-center
                xs:rounded-full xs:text-sm
                lg:rounded-none lg:text-sm
                '>{products.filter(data => data.type === items).length}</div>
            </div>
        )
    })

    const starsProduct = [1 , 2 , 3 , 4 , 5].map(stars => {
        return (
            <div key={stars} className='
            flex justify-center items-center

            '>
                <input className='xs:rounded-full lg:rounded-none' type='checkbox' checked={filteredStars === stars} onChange={()=> filteredStars === stars ? dispatch(filterByStars()) : dispatch(filterByStars(stars))}/>
                <RatingStar id={stars.toString()} rating={stars} noBorder={true} size={liveWidth < 500 ? 20 : 23}/>
            </div>
        )
    }).reverse()


    return (

        <div className=' animate__animated animate__zoomInLeft flex flex-col justify-start items-center
         xs:w-10/12 xs:px-5 xs:py-2
         lg:w-96 lg:px-8 lg:py-2 lg:mt-16 lg:h-auto lg:bg-white lg:gap-2
         '>


            <div className='
            w-full flex flex-col justify-start items-center gap-2

            '>

                <p className='
                w-full font-bold
                xs:my-5  xs:text-lg
                lg:my-5 lg:text-3xl
                '>price</p>

                <RangeSlider/>

            </div>


            <p className='w-full font-bold
            xs:text-lg xs:my-3
            lg:text-3xl lg:my-2
            '>Products</p>

            <div className='w-full
            xs:grid xs:py-2 xs:grid-cols-2 xs:justify-between xs:items-center xs:bg-neutral-100 xs:rounded-2xl
            lg:flex lg:py-0 lg:flex-col lg:justify-center lg:items-center lg:bg-transparent lg:rounded-none
            '>
                {typeProduct}
            </div>

            <p className='
            w-full font-bold
            xs:my-5 xs:text-lg
            lg:my-2 lg:text-3xl

            '>Rating</p>

            <div className='w-full
             xs:grid xs:grid-cols-2 xs:bg-neutral-100 xs:rounded-2xl
             lg:flex lg:flex-col lg:justify-center lg:items-start lg:bg-transparent lg:rounded-none
            '>
                {starsProduct}
            </div>


        </div>
    )
}