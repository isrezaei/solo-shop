import {selectAllMasterData} from "../../../../Redux/MasterDataSlice";
import {useSelector , useDispatch} from "react-redux";
import {RatingStar} from "rating-star";
import {filterByStars , filterByProduct} from "../../../../Redux/FilterProductSlice";
import {Price} from "./Price";
import {useGetLiveWidth} from "../../../../Helper/useGetLiveWidth";
import {Products} from "../../../Header/Search/Products/Products";
import Product from "./Product";
import Rate from "./Rate";


export const Panel = () =>
{

    return (

        <div className='flex flex-col justify-start items-center
         xs:w-80 xs:px-5 xs:py-3 xs:mt-10 xs:bg-white xs:rounded-2xl
         md:w-[30rem] md:px-8 md:py-2  md:h-auto md:gap-2 md:bg-transparent
         lg:w-96'>

            <div className=' w-full flex flex-col justify-start items-center'>
                <p className='
                w-full font-bold text-center text-neutral-600
                xs:text-sm'>price</p>
                <Price/>
            </div>

            <p className='
            w-full font-bold text-center text-neutral-600
            xs:text-sm xs:my-3 md:my-0'>Products</p>

            <div className='w-full text-sm
            xs:grid xs:py-2 xs:grid-cols-2 xs:justify-between xs:items-center xs:bg-neutral-100 xs:rounded-2xl
            md:flex md:py-0 md:flex-col md:justify-center md:items-center md:bg-transparent md:rounded-none'>
                <Product/>
            </div>

            <p className='
            w-full font-bold text-center text-neutral-600
            xs:text-sm xs:my-3 md:my-0'>Rating</p>

            <div className='w-full
             xs:grid xs:grid-cols-2 xs:bg-neutral-100 xs:rounded-2xl bg-red-500
             md:flex md:flex-col md:justify-center md:items-start md:bg-transparent md:rounded-none'>
                <Rate/>
            </div>


        </div>
    )
}