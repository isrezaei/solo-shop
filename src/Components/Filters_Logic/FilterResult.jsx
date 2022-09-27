import {useSelector} from "react-redux";
import {SortByFilter} from "../../Redux/MasterDataSlice";
import 'react-loading-skeleton/dist/skeleton.css'
import {RatingStar} from "rating-star";

export const FilterResult = () =>
{
    const filteredProduct = useSelector(state => SortByFilter(state , state.FilterProductSlice))?.map(products => {

        const {id , product , price , color , image , detailsImage , capacity , offer , rate} = products
        const discountedPrice = parseInt((price - ((price * offer) / 100)))

        return (
            <div className={`
            animate__animated animate__backInUp animate__faster w-full h-56 p-1 bg-white flex flex-col justify-center items-center
            xs:rounded-3xl`} key={id}>
                <div className='w-full h-96 flex justify-center items-center'>
                    <img className='w-20' src={image?.mainImg}/>
                </div>
                <div className='w-full flex flex-col justify-center items-center '>
                    <p className='w-full text-[.8rem] font-bold text-neutral-500 text-center'>{product}</p>
                    <RatingStar id={rate.toString()} rating={rate} noBorder={true} size={15}/>
                    <div className='w-full flex justify-evenly items-center '>
                        {
                            price === 'out' ? <p className='font-bold text-[.8rem] text-rose-600'>out of stock</p>
                                : <p className={`${offer !== 0 ? 'opacity-50 text-[.8rem] font-bold line-through text-red-700':'text-[.8rem] text-neutral-500 font-bold'}`}>${price}</p>
                        }
                        <div className='text-neutral-500 '>{price !== 'out' && offer !== 0 &&  <p>${discountedPrice}</p>}</div>
                    </div>
                </div>
            </div>
        )
    })

    return (

        <div className='
        grid justify-center items-center
        xs:w-11/12 xs:h-auto xs:grid-cols-2 xs:mt-0  xs:p-5 xs:gap-5 xs:overflow-y-scroll xs:scrollbar-hide
        md:w-full md:h-auto md:grid-cols-3 md:mt-12 md:p-4 md:gap-3 md:overflow-y-auto md:scrollbar-hide
        lg:grid-cols-4'>
            {filteredProduct?.length ? filteredProduct : <p>wait for filter</p>}
        </div>
    )
}