import Slider  from "r-range-slider";
import {useState} from "react";
import {selectAllMasterData} from "../../Redux/MasterDataSlice";
import {useSelector , useDispatch} from "react-redux";
import { RatingStar } from "rating-star";
import {filterByPrice , filterByStars , filterByProduct} from "../../Redux/FilterProductSlice";
import {RangeSlider} from "./RangeSlider";


export const FilterLogic = () =>
{
    const products = useSelector(selectAllMasterData)

    const {product : filteredProduct , stars : filteredStars} = useSelector(state => state.FilterProductSlice)

    const dispatch = useDispatch()


    const typeProduct = ['iphone' , 'ipad' , 'ipod' , 'Watch' , 'Mac' , 'AirPod' ].map(items => {
        return (
            <div key={items} className='w-full flex justify-between items-center'>
                <div className='w-20 flex justify-start items-center gap-2 my-1'>
                    <input type='checkbox' checked={filteredProduct === items}  onChange={()=> filteredProduct === items ? dispatch(filterByProduct()) : dispatch(filterByProduct(items))}/>
                    <p>{items}</p>
                </div>
                <div className='w-8 h-5 bg-blue-600 text-white flex justify-center items-center'>{products.filter(data => data.type === items).length}</div>
            </div>
        )
    })

    const starsProduct = [1 , 2 , 3 , 4 , 5].map(stars => {
        return (
            <div key={stars} className='flex justify-center items-center gap-2'>
                <input type='checkbox' checked={filteredStars === stars} onChange={()=> filteredStars === stars ? dispatch(filterByStars()) : dispatch(filterByStars(stars))}/>
                <RatingStar id={stars.toString()} rating={stars} noBorder={true}/>
            </div>
        )
    }).reverse()


    return (
        <div className='px-8 py-2 mt-16 w-96 h-auto bg-white flex flex-col justify-start items-center gap-2'>


            <div className='w-full flex flex-col justify-start items-center gap-2'>

                <p className='w-full mb-10 font-bold text-3xl'>price</p>

                <RangeSlider/>

            </div>


                <p className='w-full mb-10 font-bold text-3xl'>Products</p>

            <div className='w-full flex flex-col justify-center items-center'>
                {typeProduct}
            </div>

            <p className='w-full my-3 font-bold text-3xl'>Rating</p>

            <div className='w-full flex flex-col justify-center items-start'>
                {starsProduct}
            </div>


        </div>
    )
}