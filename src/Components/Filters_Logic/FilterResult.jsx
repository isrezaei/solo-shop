import {useSelector} from "react-redux";
import {SortByFilter} from "../../Redux/MasterDataSlice";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const FilterResult = () =>
{
    const filteredProduct = useSelector(state => SortByFilter(state , state.FilterProductSlice))?.map(products => {

        const {id , product , price , color , image , detailsImage , capacity , offer} = products
        const discountedPrice = parseInt((price - ((price * offer) / 100)))

        return (
            <div className={`
            animate__animated animate__backInUp animate__faster w-full h-56 p-1 bg-white flex flex-col justify-center items-center
            xs:rounded-3xl
            lg:rounded-none
            `} key={id}>

                <div className='w-full h-96 flex justify-center items-center'>
                    <img className='w-20 ' src={image?.mainImg}/>
                </div>

                <div className='h-full flex flex-col gap-1 '>

                    <p className='w-full text-sm font-bold text-gray-600 text-center'>{product}</p>

                    <div className='w-full flex flex-col justify-start items-center '>
                        {
                            price === 'out' ? <p className='font-bold text-rose-600'>out of stock</p>
                                : <p className={`${offer !== 0 ? 'opacity-50 font-bold line-through text-red-700' : 'text-gray-500 font-bold'}`}>${price}</p>
                        }
                        <div className='text-gray-500 font-bold'>{price !== 'out' && offer !== 0 &&  <p>${discountedPrice}</p>}</div>
                    </div>
                </div>
            </div>
        )
    })

    return (

        <div className='
        w-full bg-gray-100 grid justify-center items-center
        xs:h-[38rem] xs:grid-cols-2 xs:mt-0  xs:p-5 xs:gap-5 xs:overflow-y-scroll
        lg:h-auto lg:grid-cols-6 lg:mt-12 lg:p-4 lg:gap-3 lg:overflow-y-auto lg:scrollbar-hide
        '>
            {filteredProduct?.length ? filteredProduct : Array.from(Array(28).keys() , items => <Skeleton key={items} className='h-56 animate__animated animate__backInUp'/>)}
        </div>
    )
}